import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common'
import * as path from 'path';
import { appConfig } from 'src/config';

const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
  ];

const resolvePath = (file: string) => path.resolve(`../client/dist/${file}`);

@Injectable()
export class FrontendMiddleware implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {
      const { url } = req;
      if (url.startsWith(appConfig.API_PREFIX)) {
        next();
      } else
      if (allowedExt.filter(ext => url.indexOf(ext) > 0).length > 0) {
        // it has a file extension --> resolve the file
        res.sendFile(resolvePath(url));
      } else {
        // in all other cases, redirect to the index.html!
        res.sendFile(resolvePath('index.html'));
      }
    };
  }
}