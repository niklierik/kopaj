import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppLoggerMiddleware } from './log.middleware';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

@Module({
    imports: [
        WinstonModule.forRoot({
            transports: [
                new winston.transports.File({
                    filename: 'requests-log.txt',
                    format: winston.format.printf(log => {
                        if (typeof log.message === 'object') {
                            log.message = JSON.stringify(log.message);
                        }
                        console.log(log.message);
                        return log.message;
                    }),
                }),
            ],
        }),
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {
        consumer.apply(AppLoggerMiddleware).forRoutes('*');
    }
}
