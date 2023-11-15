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

export class Task16Query {}
export class Task16Body {}

@Controller('level3/bonus')
export class Task16Controller {
    @Post()
    @HttpCode(200)
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
        const text = await reqToString(req);
        return text
            .split('')
            .map(t => (t === ' ' && Math.random() > 0.5 ? '-' : ' '))
            .join('');
    }
}
