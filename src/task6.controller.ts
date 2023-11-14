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

export class Task6Query {}
export class Task6Body {}

@Controller('task6')
export class Task6Controller {
    @Post() async task6(
        @Query()
        query: Task6Query,
        @Body()
        dto: Task6Body,
        @Req()
        req: Request,
        @Res({ passthrough: true })
        res: Response,
    ) {
        return Math.random() * 1000;
    }
}
