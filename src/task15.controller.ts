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

export class Task15Query {}
export class Task15Body {}

@Controller('level2/bonus')
export class Task15Controller {
    @Post()
    @HttpCode(200)
    async task15(
        @Query()
        query: Task15Query,
        @Body()
        dto: Task15Body,
        @Req()
        req: Request,
        @Res({ passthrough: true })
        res: Response,
    ) {
        return Math.random() * 1000;
    }
}
