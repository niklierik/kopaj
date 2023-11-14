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
    }
}
