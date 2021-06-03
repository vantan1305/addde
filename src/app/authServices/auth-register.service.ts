import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { createRequestOption } from '../util/request-util';
@Injectable({
  providedIn: 'root'
})
export class AuthRegisterService {

  private BASE_API_URL = 'http://localhost:8082/itsol/auth/';
  constructor(private http : HttpClient) { }

  public registerUser(data: any, req? :any): Observable<any> {
    const options = createRequestOption(req);
    return this.http.post(`${this.BASE_API_URL}signup`, data, {
      params: options,
      observe: 'response'
    })
  }

  public registerUser2(data: any): Observable<any> {
    return this.http.post(`${this.BASE_API_URL}signup`,data).pipe(
      catchError(e => throwError(this.handleError(e)))
    );
  }
  handleError(e){
    console.log(e);
  }
}
