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
import { decodeMorse } from './morse';

export class Task4Query {}
export class Task4Body {}

@Controller('level1/task1')
export class Task4Controller {
    @Post()
    @HttpCode(200)
    async task4(
        @Query()
        query: Task4Query,
        @Body()
        dto: Task4Body,
        @Req()
        req: Request,
        @Res({ passthrough: true })
        res: Response,
    ) {
        const text = await reqToString(req);
        const morse = decodeMorse(text);
        return morse;
        if (text.includes('.') && text.includes('-')) {
            const decoded = morse.decode(text);
            return decoded.join(' ');
        }
        const encoded = morse.encode(text.split(' '));
        return encoded.join(' ');
    }
}
