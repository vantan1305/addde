import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenStorageService } from '../authServices/token-storage.service';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const rootUrl = "http://localhost:8082/itsol/auth/";
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  //  rootUrl = "http://localhost:8082"
  // constructor(private http: HttpClient) { }

  // login(login: any): any{
  //  return this.http.post<any>(this.rootUrl+"/itsol/auth/signin",login);
  // }
  private http : HttpClient;
  constructor(
    private jwtHelper : JwtHelperService,
    private tokenStorageService : TokenStorageService,
    private handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }

  public login(loginValue): Observable<any> {
    return this.http.post(`${rootUrl}signin`, loginValue, httpOptions);
  }

  public isAuthenticated():boolean {
    const token = this.tokenStorageService.getToken();
    return !this.jwtHelper.isTokenExpired(token);
  }
  public isLogin() : boolean{
    return !!this.tokenStorageService.getToken();
  }
}
