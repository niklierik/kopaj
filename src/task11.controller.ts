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

export class Task11Query {}
export class Task11Body {}

@Controller('level3/task2')
export class Task11Controller {
    @Post()
    @HttpCode(200)
    async task11(
        @Query()
        query: Task11Query,
        @Body()
        dto: Task11Body,
        @Req()
        req: Request,
        @Res({ passthrough: true })
        res: Response,
    ) {
        return Math.random() * 1000;
    }
}
