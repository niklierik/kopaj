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

export class Task6Query {}
export class Task6Body {}

@Controller('level1/task3')
export class Task6Controller {
    @Post()
    @HttpCode(200)
    async task6(
        @Query()
        query: Task6Query,
        @Body()
        dto: Task6Body,
        @Req()
        req: Request,
        @Res({ passthrough: true })
        res: Response,
    ) {
        const text = await reqToString(req);
        const rows = text.split('\n');
        const rowSize = rows[0].length + 1;
        let i = 0;
        for (const char of text) {
            if (char === '.') {
                const prevRowOffset = i - rowSize + 1;
                if (prevRowOffset < 0) {
                    continue;
                }
                const nextRowOffset = i + rowSize + 1;
                if (nextRowOffset >= text.length) {
                    continue;
                }
                if (
                    text[i - 1] === '\n' ||
                    text[i - 2] === '\n' ||
                    text[i + 1] === '\n' ||
                    text[i + 2] === '\n'
                ) {
                    continue;
                }
                if (
                    !(
                        text[i - 2] === '(' &&
                        text[i - 1] === '-' &&
                        text[i + 1] === '-' &&
                        text[i + 2] === ')'
                    )
                ) {
                    continue;
                }
                if (
                    !(
                        text[i - rowSize - 2] === '(' &&
                        text[i - rowSize - 1] === '\\' &&
                        text[i - rowSize] === '(' &&
                        text[i - rowSize + 1] === '\\'
                    )
                ) {
                    continue;
                }
                if (
                    text[i + rowSize - 2] === '(' &&
                    text[i + rowSize - 1] === '"' &&
                    text[i + rowSize] === ')' &&
                    text[i + rowSize + 1] === '(' &&
                    text[i + rowSize + 2] === '"' &&
                    text[i + rowSize + 3] === ')'
                ) {
                    return `${i % rowSize} ${Math.floor(i / rowSize)}`;
                }
            }
            i++;
        }
        return `${Math.floor(Math.random() * 60)} ${Math.floor(
            Math.random() * 30,
        )}`;
    }
}
