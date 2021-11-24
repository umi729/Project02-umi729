import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceService} from '../services/user-service.service'
import {SignupInfo} from '../models/signup-info'
import{ UserInfo} from '../models/user-info'
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { SuccessDialogComponent } from '../../shared/dialogs/success-dialog/success-dialog.component';
import { FormControl,  FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Validation} from '../models/validation'

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css'],
})
export class ResetPassComponent implements OnInit {
  
  private validation= new Validation();
  
  constructor(private service: UserServiceService, private router: Router,
    private formBuilder: FormBuilder,
   
    private location: Location,
    private dialog: MatDialog,) {}
  
    form: FormGroup = this.formBuilder.group({
     
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
      ]),
      cpassword: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
      ]),
    },
    {
  
      validator: this.validation.MustMatch('password', 'cpassword')
  }
    
    );
  
    public hasError = (controlName: string, errorName: string) => {
      return this.form.controls[controlName].hasError(errorName);
    };
  
    dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: {},
    };
  
  
  
    usr:any|null=null;
  changepass(newpass:UserInfo){
    this.usr=sessionStorage.getItem("temp");
    const obj = JSON.parse(this.usr);
   // console.log(obj);
    this.service.geUpdatePass(obj.userId, newpass).subscribe((pdata) => {
        //console.warn(pdata);
        if(pdata!=null){
          let dialogRef = this.dialog.open(
            SuccessDialogComponent,
            this.dialogConfig
          );
          //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
          dialogRef.afterClosed().subscribe((result) => {
            
            this.location.back();
            this.router.navigateByUrl('login');
            
          });
        }
       
        sessionStorage.removeItem("temp")
    },
    (error) => {                              //Error callback
      console.error('error caught in reset password component')
     console.error(error);

      //throw error;   //You can also throw the error to a global error handler
    }
    );
  }


  ngOnInit(): void {}
}
