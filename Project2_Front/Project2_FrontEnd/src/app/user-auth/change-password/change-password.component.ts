import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { UserInfo } from '../models/user-info';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { SuccessDialogComponent } from '../../shared/dialogs/success-dialog/success-dialog.component';
import { FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Validation} from '../models/validation'


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {

 
  private validation= new Validation();

  constructor(
    private service: UserServiceService,
    private router: Router,
    private formBuilder: FormBuilder,
    private location: Location,
    private dialog: MatDialog,
  ) { }

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

  usr: any | null = null;
  changepass(newpass: UserInfo) {
    this.usr = sessionStorage.getItem('user');
    const jsonobj = JSON.parse(this.usr);
    console.log(jsonobj.userId);

    newpass.username = jsonobj.username;
    this.service.geUpdatePass(jsonobj.userId, newpass).subscribe(
      (pdata) => {
        console.warn(pdata);
        let dialogRef = this.dialog.open(
          SuccessDialogComponent,
          this.dialogConfig
        );
        //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
        dialogRef.afterClosed().subscribe((result) => {
          this.location.back();
        });
      },
      (error) => {
        //Error callback
        console.error('error caught in change password component');
        console.error(error);

        //throw error;   //You can also throw the error to a global error handler
      }
    );
  }
  ngOnInit(): void { 

    if (localStorage.getItem('token') == null) {
      this.router.navigateByUrl('login');
    }
  }
}
