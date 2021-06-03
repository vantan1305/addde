import { Injectable } from '@angular/core';
import decode from 'jwt-decode';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }
  tokenPayload :any;

  signOut() : void {
     window.localStorage.removeItem(TOKEN_KEY);
     window.localStorage.removeItem(USER_KEY);
     window.localStorage.clear();
  }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public saveUser(user): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public getToken(): any {
    return window.localStorage.getItem(TOKEN_KEY);
  }
  public getUser(): any {
    return JSON.parse(localStorage.getItem(USER_KEY)|| '{}');
  }
  public getUsername(): any {
    this.tokenPayload = decode(this.getToken());
    return this.tokenPayload.sub;
  }
  public getPayload(): any {
    return decode(this.getToken());
  }
}
