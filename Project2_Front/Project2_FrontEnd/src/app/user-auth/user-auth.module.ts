
import { CommonModule } from '@angular/common';
import { LoginAuthComponent } from './login-auth/login-auth.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterialModule} from '../angular-material/angular-material.module';
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule } from '@angular/forms/';
import { ResetPassComponent } from './reset-pass/reset-pass.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    LoginAuthComponent,
    SignupComponent,
    ForgetPassComponent,
    ResetPassComponent,
    ChangePasswordComponent 
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  exports: [
    LoginAuthComponent,
    SignupComponent,
    ForgetPassComponent
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]

})
export class UserAuthModule { }
