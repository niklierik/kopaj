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
export class Task2Query {}
export class Task2Body {}

@Controller('task2')
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
        return Math.random() * 1000;
    }
}
