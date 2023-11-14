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
export class Task4Query {}
export class Task4Body {}

@Controller('task4')
export class Task4Controller {
    @Post()
    async task4(
        @Query()
        query: Task4Query,
        @Body()
        dto: Task4Body,
        @Req()
        req: Request,
        @Res({ passthrough: true })
        res: Response,
    ) {
        return Math.random() * 1000;
    }
}
