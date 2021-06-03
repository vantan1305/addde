import { JwtHelperService } from 'node_modules/lib/jwthelper.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private jwt: JwtHelperService,
    private router: Router
              ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token && this.jwt.isTokenExpired(token, new Date().getTime())){
      request = request.clone({headers: request.headers.set('Authorization', `Bearer ${token}`)});
    }else {
      this.router.navigate(['login']).then(null);
    }
    return next.handle(request);
  }
}
