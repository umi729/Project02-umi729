import { Injectable } from '@angular/core';
import { ErrorDialogComponent } from '../dialogs/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';


import {  HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  public errorMessage: string = '';
  public dialogConfig:any;
  constructor(private router: Router, private dialog: MatDialog) { }

  public handleOtherError(error: HttpErrorResponse){
    //this.createErrorMessage(error);
    this.dialogConfig.data = { 'errorMessage': error };
    this.dialog.open(ErrorDialogComponent, this.dialogConfig);
  }
}
