import { LoginServiceService } from './../services/login-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  tokenPayload: any;
  constructor(public auth: LoginServiceService, public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean  {
   
    if(this.auth.isAuthenticated()){
      const expectedRole = route.data.expectedRole;
      const token = localStorage.getItem('auth-token');
      this.tokenPayload = decode(token || '{}');
      for(let index = 0; index < this.tokenPayload.role.length ; index++)
      {
        if( this.tokenPayload.role[index].authority == expectedRole){
          return true;
        }
      }
      window.alert('Tài khoản không được quyền truy cập trang này !!')
      this.router.navigate(['error/403']);
      return false;
    }
    return false;
  }
}
