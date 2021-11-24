import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {SignupInfo} from '../models/signup-info';
import {UserServiceService} from '../services/user-service.service'
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { SuccessDialogComponent } from '../../shared/dialogs/success-dialog/success-dialog.component';
import { FormControl, AbstractControl, FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule,} from '@angular/forms';
import {Validation} from '../models/validation'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  private dialogConfig: any;
  private validation= new Validation();
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private dialog: MatDialog,
    private router: Router,
    private service: UserServiceService
    
  ) {}

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
    ]),
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

  signup(register: SignupInfo) {
    this.service.signup(register).subscribe(
      (data) => {
        this.router.navigateByUrl('login');

        {
          let dialogRef = this.dialog.open(
            SuccessDialogComponent,
            this.dialogConfig
          );
          //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
          dialogRef.afterClosed().subscribe((result) => {
            this.location.back();
          });
        }
      },
      (error) => {
        //Error callback
        console.error('error caught in sign up component');
        console.error(error);

        //throw error;   //You can also throw the error to a global error handler
      }
    );
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('token') != null) {
      this.router.navigateByUrl('home');
    }
    // this.userId=this.route.snapshot.paramMap.get("id");

    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: {},
    };
  }

}
