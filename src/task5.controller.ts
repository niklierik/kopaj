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

export class Task5Query {}
export class Task5Body {}

@Controller('task5')
export class Task5Controller {
    @Post()
    async task5(
        @Query()
        query: Task5Query,
        @Body()
        dto: Task5Body,
        @Req()
        req: Request,
        @Res({ passthrough: true })
        res: Response,
    ) {
        return Math.random() * 1000;
    }
}
