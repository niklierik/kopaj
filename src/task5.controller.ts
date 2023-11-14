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
import * as getRequestBody from 'raw-body';

export class Task5Query {}
export class Task5Body {}

@Controller('level1/task2')
export class Task5Controller {
    @Post()
    @HttpCode(200)
    async task5(
        @Query()
        query: Task5Query,
        @Body()
        dto: Task5Body,
        @Req()
        req: Request,
        @Res({ passthrough: true })
        res: Response,
    ) {
        const cardNumbers = [
            'A',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            'T',
            'J',
            'K',
            'Q',
        ];
        const cardSuits = ['S', 'H', 'C', 'D'];
        const mul = cardNumbers
            .map(num => cardSuits.map(suit => num + suit))
            .flat();
        mul.push('JK');

        const text = (await getRequestBody(req)).toString('utf-8');
        const cards = text.split(' ');
        const missing = mul.filter(cardType => {
            return !cards.includes(cardType);
        });
        const result = missing.sort().join(' ');
        return result;
    }
}
