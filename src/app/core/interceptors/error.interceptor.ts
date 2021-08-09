import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { ErrorService } from '../services/error.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private errorService: ErrorService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('entrei no interceptor');

    return next.handle(req).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          console.log(err.status);
          if (err.status === 401) {
            this.errorService.openDialog(
              'Você não tem autorização para fazer isso, certifique-se de que está logado ou crie uma conta para logar.'
            );
            this.router.navigate(['login-register']);
          }
          if (err.status === 500) {
            this.errorService.openDialog(
              'Ocorreu um erro no sistema, tente novamente.'
            );
          }
          if (
            err.error === 'Cannot find user' ||
            err.error === 'Incorrect password'
          ) {
            this.errorService.openDialog('Usuário e/ou senha incorretos');
          }
          if (err.error === 'Email already exists') {
            this.errorService.openDialog('E-mail já está sendo utilizado');
          }
        }
        return throwError(err.statusText);
      })
    );
  }
}
