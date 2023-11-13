import { Injectable, NestMiddleware, Logger, Inject } from '@nestjs/common';

import { Request, Response, NextFunction } from 'express';
import { pick } from 'lodash';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

export function toJSON(obj: any) {
    const json = {};
    if (typeof obj !== 'object') {
        return obj;
    }
    for (const [key, value] of Object.entries(obj)) {
        try {
            json[key] = JSON.stringify(value);
        } catch {
            json[key] = '!!circular!!';
        }
    }
    return json;
}

@Injectable()
export class AppLoggerMiddleware implements NestMiddleware {
    constructor(
        @Inject(WINSTON_MODULE_NEST_PROVIDER)
        private readonly logger: Logger,
    ) {}

    use(req: Request, res: Response, next: NextFunction): void {
        this.logger.log('');
        this.logger.log('');
        this.logger.log('');
        this.logger.log('');
        this.logger.log('Incoming request at ' + new Date());
        this.logger.log('Request:');
        this.logger.log(
            JSON.stringify(
                pick(
                    req,
                    'body',
                    'headers',
                    'query',
                    'url',
                    'baseUrl',
                    'originalUrl',
                    'method',
                    'params',
                ),
            ),
        );

        next();

        // https://yflooi.medium.com/nestjs-request-and-response-logging-with-middleware-b486121e4907
        const rawResponse = res.write;
        const rawResponseEnd = res.end;
        const chunkBuffers = [];
        res.write = (...chunks) => {
            const resArgs = [];
            for (let i = 0; i < chunks.length; i++) {
                resArgs[i] = chunks[i];
                if (!resArgs[i]) {
                    res.once('drain', res.write);
                    i--;
                }
            }
            if (resArgs[0]) {
                chunkBuffers.push(Buffer.from(resArgs[0]));
            }
            return rawResponse.apply(res, resArgs);
        };
        this.logger.log(`Done writing, beginning res.end`);
        res.end = (...chunk) => {
            const resArgs = [];
            for (let i = 0; i < chunk.length; i++) {
                resArgs[i] = chunk[i];
            }
            if (resArgs[0]) {
                chunkBuffers.push(Buffer.from(resArgs[0]));
            }
            const body = Buffer.concat(chunkBuffers).toString('utf8');
            res.setHeader('origin', 'restjs-req-res-logging-repo');
            const responseLog = {
                response: {
                    statusCode: res.statusCode,
                    body: JSON.parse(body) || body || {},
                    // Returns a shallow copy of the current outgoing headers
                    headers: res.getHeaders(),
                },
            };
            this.logger.log('res: ');
            this.logger.log(JSON.stringify(responseLog));
            rawResponseEnd.apply(res, resArgs);
            return responseLog as unknown as Response;
        };
    }
}
