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

export class Task9Query {}
export class Task9Body {}

@Controller('task9')
export class Task9Controller {
    @Post() async task9(
        @Query()
        query: Task9Query,
        @Body()
        dto: Task9Body,
        @Req()
        req: Request,
        @Res({ passthrough: true })
        res: Response,
    ) {
        return Math.random() * 1000;
    }
}
