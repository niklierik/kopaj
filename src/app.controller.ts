import { Body, Controller, Post, Req } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsDate, IsNumber } from 'class-validator';
import { LoginDto } from './login.dto';

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
