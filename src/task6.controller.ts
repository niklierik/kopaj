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
import { reqToString } from './main';

export class Task6Query {}
export class Task6Body {}

@Controller('level1/task3')
export class Task6Controller {
    @Post()
    @HttpCode(200)
    async task6(
        @Query()
        query: Task6Query,
        @Body()
        dto: Task6Body,
        @Req()
        req: Request,
        @Res({ passthrough: true })
        res: Response,
    ) {
        const text = await reqToString(req);
        return Math.random() * 1000;
    }
}
