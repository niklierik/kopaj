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

export class Task13Query {}
export class Task13Body {}

@Controller('ground/bonus')
export class Task13Controller {
    @Post()
    @HttpCode(200)
    async task13(
        @Query()
        query: Task13Query,
        @Body()
        dto: Task13Body,
        @Req()
        req: Request,
        @Res({ passthrough: true })
        res: Response,
    ) {
        return '2019-07-04';
    }
}
