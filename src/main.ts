import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { readFileSync } from 'fs';
import { isInteger } from 'lodash';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

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
    const app = await NestFactory.create(AppModule, { rawBody: true });
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
        }),
    );
    app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
    const port = readPort();
    await app.listen(port);
    console.log('Listening to ' + port);
}
bootstrap();
