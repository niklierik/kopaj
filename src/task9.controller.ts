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
import { chess } from './chess';
import { reqToString } from './main';

export class Task9Query {}
export class Task9Body {}

@Controller('level2/task3')
export class Task9Controller {
    @Post()
    @HttpCode(200)
    async task9(
        @Query()
        query: Task9Query,
        @Body()
        dto: Task9Body,
        @Req()
        req: Request,
        @Res({ passthrough: true })
        res: Response,
    ) {
        const text = await reqToString(req);

        const board = chess(text);
        return board;
    }
}
