import {
    Body,
    Controller,
    HttpCode,
    Post,
    Query,
    Req,
    Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import * as getRawBody from 'raw-body';
import { fibonacci } from './fibonacci';
import { reverseFactorial } from './reverse-factorial';
export class Task2Query {}
export class Task2Body {}

@Controller('ground/task2')
export class Task2Controller {
    @Post()
    async task2(
        @Query()
        query: Task2Query,
        @Body()
        dto: Task2Body,
        @Req()
        req: Request,
        @Res({ passthrough: true })
        res: Response,
    ) {
        const raw = await getRawBody(req);
        const text = raw.toString('utf-8');
        return reverseFactorial(Number(text));
        // return fibonacci(text);
    }
}
