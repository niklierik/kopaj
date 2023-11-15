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

export class BossQuery {}
export class BossBody {}

@Controller('final-boss')
export class FinalBoss {
    @Post()
    @HttpCode(200)
    async task10(
        @Query()
        query: BossQuery,
        @Body()
        dto: BossBody,
        @Req()
        req: Request,
        @Res({ passthrough: true })
        res: Response,
    ) {
        return 'I accept the terms and conditions';
    }
}
