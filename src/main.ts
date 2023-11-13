import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { readFileSync } from 'fs';
import { isInteger, isNumber } from 'lodash';

function readPort(): number {
    try {
        const text = readFileSync('port.txt', 'utf-8');
        const num = Number(text);
        if (!isInteger(num)) {
            return 3000;
        }
        return num;
    } catch {
        return 3000;
    }
}
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
        }),
    );
    const port = readPort();
    await app.listen(port);
    console.log('Listening to ' + port);
}
bootstrap();
