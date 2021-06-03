import { LoginServiceService } from './../services/login-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth: LoginServiceService, private router: Router,
    private token: TokenStorageService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(!this.auth.isLogin()){
      this.router.navigate(['index']);
      return false;
    }
    if(!this.auth.isAuthenticated()){
      window.alert("Phiên đăng nhập đã hết hạn !!");
      this.token.signOut();
      window.location.replace('');
      return false;
    }
    return true;

  }
}
