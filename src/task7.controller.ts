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

export class Task7Query {}
export class Task7Body {}

@Controller('level2/task1')
export class Task7Controller {
    @Post() async task7(
        @Query()
        query: Task7Query,
        @Body()
        dto: Task7Body,
        @Req()
        req: Request,
        @Res({ passthrough: true })
        res: Response,
    ) {
        return Math.random() * 1000;
    }
}
