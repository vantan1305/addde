import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { LoginServiceService } from '../../services/login-service.service';
import { Router} from '@angular/router';
import { TokenStorageService } from 'src/app/authServices/token-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private _fb: FormBuilder,
    private LoginService : LoginServiceService,
    private router :Router,
    private tokenStorage : TokenStorageService,
    ) { }
  profileForm = this._fb.group(
    {
      username: [''],
      password: [''],
    }
  )
  ngOnInit() {
  }
  showUser() {
    this.LoginService.login(this.profileForm.value).subscribe(res => {
      // alert("Dang nhap thanh cong");
      this.tokenStorage.saveToken(res.accessToken);
        this.tokenStorage.saveUser(res);
      this.router.navigateByUrl('admin')


    },
    err => {
      alert("Tai khoan mat khau ko chinh xac")
    }

    )
  }
}
