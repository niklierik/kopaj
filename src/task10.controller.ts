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

export class Task10Query {}
export class Task10Body {}

@Controller('level3/task1')
export class Task10Controller {
    @Post() async task10(
        @Query()
        query: Task10Query,
        @Body()
        dto: Task10Body,
        @Req()
        req: Request,
        @Res({ passthrough: true })
        res: Response,
    ) {
        return Math.random() * 1000;
    }
}
