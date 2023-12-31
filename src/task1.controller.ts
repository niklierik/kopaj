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
import * as getRawBody from 'raw-body';

export class Task1Query {}
export class Task1Body {}

@Controller('ground/task1')
export class Task1Controller {
    @Post()
    @HttpCode(200)
    async task1(
        @Query()
        query: Task1Query,
        @Body()
        dto: Task1Body,
        @Req()
        req: Request,
        @Res({ passthrough: true })
        res: Response,
    ) {
        return '';
    }
}
