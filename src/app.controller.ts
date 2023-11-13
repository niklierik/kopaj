import { Body, Controller, Post, Req } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsDate, IsNumber } from 'class-validator';

export class LoginDto {
    username: string;
    @Type(() => Number)
    @IsNumber()
    asd: number;
    @Type(() => Date)
    @IsDate()
    date: Date;
}

@Controller()
export class AppController {
    constructor() {}

    @Post('/login')
    login(@Body() loginDto: LoginDto, @Req() req: Request) {
        return {
            username: loginDto.username,
            password: loginDto.asd + 1,
            date: loginDto.date,
        };
    }
}
