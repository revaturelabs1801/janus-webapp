import { Injectable } from '@angular/core';

import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InterceptorsService implements HttpInterceptor {
  constructor() { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
    ): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
      req = req.clone({headers:
        req.headers.set('Content-Type', 'application/json')
      });
    }

    if (!req.headers.has('Access-Control-Allow-Origin')) {
      req = req.clone({headers:
        req.headers.append('Access-Control-Allow-Origin', '*')
      });
    }
    return next.handle(req);
  }
}
