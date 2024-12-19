import {inject, Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {from, Observable, switchMap} from 'rxjs';
import { environment } from '../../../environments/environment';



@Injectable()
export class Interceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!request.url.startsWith(environment.apiBaseUrlMovie)) {
      return next.handle(request)
    }

    //const client_id = localStorage.getItem('client_id')?.toString() ?? ''
      const headers = request.clone(
        {
          setHeaders: {
            Authorization: `Bearer ${environment.apiTokenMovie}`,
          },
          /* setParams: {
            'client-id': client_id
          } */
        }
      );
      return next.handle(headers)
  }
}