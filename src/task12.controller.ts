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

export class Task12Query {}
export class Task12Body {}

@Controller('level3/task3')
export class Task12Controller {
    @Post() async task12(
        @Query()
        query: Task12Query,
        @Body()
        dto: Task12Body,
        @Req()
        req: Request,
        @Res({ passthrough: true })
        res: Response,
    ) {
        return Math.random() * 1000;
    }
}
