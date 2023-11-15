import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppLoggerMiddleware } from './log.middleware';
import { WinstonModule } from 'nest-winston';
import { Task1Controller } from './task1.controller';
import { Task2Controller } from './task2.controller';
import { Task3Controller } from './task3.controller';
import { Task4Controller } from './task4.controller';
import { Task5Controller } from './task5.controller';
import { Task6Controller } from './task6.controller';
import { Task7Controller } from './task7.controller';
import { Task8Controller } from './task8.controller';
import { Task9Controller } from './task9.controller';
import { Task10Controller } from './task10.controller';
import * as winston from 'winston';
import { Task11Controller } from './task11.controller';
import { Task12Controller } from './task12.controller';
import { Task13Controller } from './task13.controller';
import { Task14Controller } from './task14.controller';
import { Task15Controller } from './task15.controller';
import { Task16Controller } from './task16.controller';
import { FinalBoss } from './boss';

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
    controllers: [
        Task1Controller,
        Task2Controller,
        Task3Controller,
        Task4Controller,
        Task5Controller,
        Task6Controller,
        Task7Controller,
        Task8Controller,
        Task9Controller,
        Task10Controller,
        Task11Controller,
        Task12Controller,
        Task13Controller,
        Task14Controller,
        Task15Controller,
        Task16Controller,
        FinalBoss,
    ],
    providers: [],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {
        consumer.apply(AppLoggerMiddleware).forRoutes('*');
    }
}
