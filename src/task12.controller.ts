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
import { reqToString } from './main';
import { csvJson } from './papa';

export class Task12Query {}
export class Task12Body {}

@Controller('level3/task3')
export class Task12Controller {
    @Post()
    @HttpCode(200)
    async task12(
        @Query()
        query: Task12Query,
        @Body()
        dto: Task12Body,
        @Req()
        req: Request,
        @Res({ passthrough: true })
        res: Response,
    ) {
        const text = await reqToString(req);
        return csvJson(text);
    }
}
