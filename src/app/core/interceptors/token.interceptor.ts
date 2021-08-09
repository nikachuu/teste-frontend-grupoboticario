import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LocalStorageUtils } from 'src/app/shared/utils/local-storage';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  localStorageUtils = new LocalStorageUtils();
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const userToken = this.localStorageUtils.getTokenLocalStorage();
    if (userToken) {
      const clonedRequest = req.clone({
        headers: req.headers.set('authorization', `Bearer ${userToken}`),
      });
      return next.handle(clonedRequest);
    }
    return next.handle(req);
  }
}
