import {
    Body,
    Controller,
    HttpCode,
    Post,
    Query,
    Req,
    Res,
} from '@nestjs/common';
import {
    formatDistance,
    formatDuration,
    intervalToDuration,
    monthsToYears,
} from 'date-fns';
import { Request, Response } from 'express';
import * as getRawBody from 'raw-body';

export class Task3Query {}
export class Task3Body {}

@Controller('ground/task3')
export class Task3Controller {
    @Post()
    async task3(
        @Query()
        query: Task3Query,
        @Body()
        dto: Task3Body,
        @Req()
        req: Request,
        @Res({ passthrough: true })
        res: Response,
    ) {
        const text = (await getRawBody(req)).toString('utf-8');
        const seconds = Number(text);
        if (seconds === 0) {
            return 'now';
        }
        const interval = intervalToDuration({ start: 0, end: seconds * 1000 });

        let result = '';
        result += this.toStr(interval.years, 'year');
        if (result) {
            result += ', ';
        }
        result += this.toStr(
            interval.days + this.monthToDay(interval.months),
            'day',
        );
        if (result) {
            result += ', ';
        }
        result += this.toStr(interval.hours, 'hour');
        if (result) {
            result += ', ';
        }
        result += this.toStr(interval.minutes, 'minute');
        if (result) {
            result += ', ';
        }
        result += this.toStr(interval.seconds, 'second');
        return result;
    }

    toStr(num: number, name: string) {
        let result = '';
        if (num > 0) {
            result += num.toString() + ' ';
            if (num > 1) {
                result += name + 's';
            } else {
                result += name;
            }
        }
        return result;
    }

    monthToDay(months: number): number {
        switch (months) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return 31;
            case 2:
                return 28;
            case 4:
            case 6:
            case 9:
            case 11:
                return 30;
        }
    }
}
