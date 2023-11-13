import { Type } from 'class-transformer';
import { IsNumber, IsDate } from 'class-validator';

export class LoginDto {
    username: string;
    @Type(() => Number)
    @IsNumber()
    asd: number;
    @Type(() => Date)
    @IsDate()
    date: Date;
}
