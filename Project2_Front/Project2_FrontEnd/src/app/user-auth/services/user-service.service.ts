import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginInfo } from '../models/login-info';
import { Observable } from 'rxjs';
import { SignupInfo } from '../models/signup-info';
import { UserInfo } from '../models/user-info';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  URL = 'http://localhost:8085/';
  constructor(private http: HttpClient) {}

 


  public generateToken(request: LoginInfo) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Accept' : "*/*"
     
});
    
    return this.http.post('http://localhost:8085/loginauth', request,{
      headers: headers,
      responseType: 'text'
  }) .pipe(
      catchError((err) => {
        console.log('error caught in service > generate Token method')
        console.error(err);
       return throwError(err);    //Rethrow it back to component
      }));
  }

  overrideNull(): string {
    if (sessionStorage.getItem('token') === null) return '';
    return sessionStorage.getItem('token') as any;
  }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: this.overrideNull(),
     
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Credentials': 'true',
    }),
  };

  public signup(register: any): Observable<SignupInfo> {
    console.log(register);
    return this.http.post<SignupInfo>(
      this.URL + 'register',
      JSON.stringify(register),
      this.httpOptions
    ).pipe(
      catchError((err) => {
        console.log('error caught in service > signup')
        console.error(err);
       return throwError(err);    //Rethrow it back to component
      }));;
  }
  public getUserInfo(user: string): Observable<UserInfo> {
    return this.http.get(
      this.URL + 'user/' + user,
      this.httpOptions
    ) as Observable<UserInfo>;
  }
  
  public geUpdatePass(id: any, pass: UserInfo): Observable<any> {
    return this.http.put(
      this.URL + 'passupdate/' + id,
      JSON.stringify(pass),
      this.httpOptions
    );
  }

  

}
