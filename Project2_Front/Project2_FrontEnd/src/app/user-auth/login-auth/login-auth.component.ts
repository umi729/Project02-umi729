import { Component, OnInit } from '@angular/core';
//import { NgbDatepickerNavigationSelect } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation-select';
import { LoginInfo } from '../models/login-info';
import { UserServiceService } from '../services/user-service.service';
import {Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { SuccessDialogComponent } from '../../shared/dialogs/success-dialog/success-dialog.component';



import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { SearchbarComponent } from '../../searchbar/searchbar.component';


@Component({
  selector: 'app-login-auth',
  templateUrl: './login-auth.component.html',
  styleUrls: ['./login-auth.component.css'],
})
export class LoginAuthComponent implements OnInit {
  constructor(private service: UserServiceService, private router: Router) {}

  public form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
  });
  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };

  // Methods
  forgetpass() {
    this.router.navigateByUrl('forgetpass');

  }

  errorMsg: string = '';
  doLogin(fdata: LoginInfo) {
    // console.log(fdata.username);
    this.service.generateToken(fdata).subscribe((data) => {
      localStorage.setItem('token', 'Bearer ' + data);
      sessionStorage.setItem('token', 'Bearer ' + data);
      this.service.getUserInfo(fdata.username).subscribe(
        (userdata) => {
         // console.warn(userdata);
          sessionStorage.setItem('user', JSON.stringify(userdata));
           //console.log(localStorage.getItem('token'));
          this.router.navigateByUrl('home');
        },
        (error) => {
          //Error callback
          console.error('error caught in login component');
          console.error(error);
          this.router.navigateByUrl('login');
          throw error; //You can also throw the error to a global error handler
        }
      );
    });
  }

  // //is remember me ...................................
  // lsRememberMe(rem:any, usr:any, pass:any) {
  //   //console.log(rem )
  //   if (rem && usr.value !== "") {
  //     localStorage.username = usr.value;
  //     localStorage.password = pass.value;
  //     localStorage.checkbox = rem.value;
  //    // console.log("sellting")
  //   } else {
  //     localStorage.username = "";
  //     localStorage.password = "";
  //     localStorage.checkbox = "";
  //    // console.log("dsellting")
  //   }
  // }

  
  ngOnInit(): void {
  // console.log( localStorage.getItem('token'));
    if (localStorage.getItem('token') != null) {
      this.router.navigateByUrl('home');
    }
  }

  dialogConfig = {
    height: '200px',
    width: '400px',
    disableClose: true,
    data: {},
  };
}
