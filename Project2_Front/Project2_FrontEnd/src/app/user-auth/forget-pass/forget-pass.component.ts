import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceService} from '../services/user-service.service'
import {SignupInfo} from '../models/signup-info'
import { UserInfo } from '../models/user-info';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css']
})
export class ForgetPassComponent implements OnInit {
  

  constructor(private router: Router, private service: UserServiceService, private formBuilder: FormBuilder,) { }
  
  
  
  form: FormGroup = this.formBuilder.group({
    dname: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [
      Validators.email,
      Validators.required,
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ])
  }
  
  );

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };

  resetpass(forget:UserInfo ) {
   
    this.service.getUserInfo(forget.username).subscribe((userdata) => {
  
    if(userdata!= null){
     // console.log(userdata)
      sessionStorage.setItem('temp',  JSON.stringify(userdata));
      this.router.navigateByUrl('resetpass');
    }
    },
    (error) => {                              //Error callback
      console.error('error caught in forget pass component')
     console.error(error);

      //throw error;   //You can also throw the error to a global error handler
    })
   
  }
  ngOnInit(): void {
    if (sessionStorage.getItem('token') != null) {
      this.router.navigateByUrl('home');}
  }

}
