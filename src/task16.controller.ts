
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

export class Task16Query {}
export class Task16Body {}

@Controller('Task16')
export class Task16Controller {
    @Post()
    async task16(
        @Query()
        query: Task16Query,
        @Body()
        dto: Task16Body,
        @Req()
        req: Request,
        @Res({ passthrough: true })
        res: Response,
    ) {
        return Math.random() * 1000;
    }
}

