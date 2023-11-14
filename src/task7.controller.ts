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
import { findPrime } from './prime';

export class Task7Query {}
export class Task7Body {
    input: number[];
}

@Controller('level2/task1')
export class Task7Controller {
    @Post()
    @HttpCode(200)
    async task7(
        @Query()
        query: Task7Query,
        @Body()
        dto: Task7Body,
        @Req()
        req: Request,
        @Res({ passthrough: true })
        res: Response,
    ) {
        const range = (dto as any).input;
        return findPrime(range);
    }
}
