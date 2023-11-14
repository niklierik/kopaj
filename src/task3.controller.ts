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

export class Task3Query {}
export class Task3Body {}

@Controller('task3')
export class Task3Controller {
    @Post()
    async task3(
        @Query()
        query: Task3Query,
        @Body()
        dto: Task3Body,
        @Req()
        req: Request,
        @Res({ passthrough: true })
        res: Response,
    ) {
        return Math.random() * 1000;
    }
}
