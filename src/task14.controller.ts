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

export class Task14Query {}
export class Task14Body {}

@Controller('level1/bonus')
export class Task14Controller {
    @Post()
    async task14(
        @Query()
        query: Task14Query,
        @Body()
        dto: Task14Body,
        @Req()
        req: Request,
        @Res({ passthrough: true })
        res: Response,
    ) {
        return Math.random() * 1000;
    }
}
