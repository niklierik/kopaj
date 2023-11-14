const fs = require('fs');

const { capitalize } = require('lodash');

let file = process.argv[2];
if (!file.startsWith('task')) {
    file = 'task' + file;
}

const path = `src/${file}.controller.ts`;

const content = `
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

export class ${capitalize(file)}Query {}
export class ${capitalize(file)}Body {}

@Controller('${capitalize(file)}')
export class ${capitalize(file)}Controller {
    @Post()
    async ${file}(
        @Query()
        query: ${capitalize(file)}Query,
        @Body()
        dto: ${capitalize(file)}Body,
        @Req()
        req: Request,
        @Res({ passthrough: true })
        res: Response,
    ) {
        return Math.random() * 1000;
    }
}

`;

fs.writeFileSync(path, content, { encoding: 'utf8' });
