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

export class Task8Query {}
export class Task8Body {}

@Controller('level2/task2')
export class Task8Controller {
    @Post()
    @HttpCode(200)
    async task8(
        @Query()
        query: Task8Query,
        @Body()
        dto: Task8Body,
        @Req()
        req: Request,
        @Res({ passthrough: true })
        res: Response,
    ) {
        return Math.random() * 1000;
    }
}
