import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
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

export class ListDto {
    @Type(() => Number)
    num: number;
}

@Controller()
export class AppController {
    constructor() {}

    @Get('list')
    list(
        @Query()
        listDto: ListDto,
    ) {
        listDto.num++;
        return listDto;
    }

    @Post('/login')
    login(@Body() loginDto: LoginDto, @Req() req: Request) {
        return {
            username: loginDto.username,
            password: loginDto.asd + 1,
            date: loginDto.date,
        };
    }
}
