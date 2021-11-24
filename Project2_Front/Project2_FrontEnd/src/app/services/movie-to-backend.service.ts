// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

// import { Movie } from '../models/movie'


// @Injectable({
//   providedIn: 'root'
// })
// export class MovieToBackendService {

//   private readonly toLocalPort : String = 'http://localhost:8085/';


//   constructor(private httpclient : HttpClient) { }



//   public generateToken(movie : Movie) : Observable<String> {

//     console.log("Doing The Service Thing");
// /*    
//     let tokenString = 'Bearer '+ movie;

//     const httpOptions = {

//       headers : new HttpHeaders({
//         "Authorization" : tokenString,
//         "Content-Type" : "application/json",
//         "Access-Control-Allow-Credentials" : "true",
//         responseType : "text" as "json"
//       })

//     }
// */

//     return this.httpclient.post<string>(this.toLocalPort.toString() + "movie", movie, {responseType : "text" as 'json'});//, httpOptions);

//   }


//   public welcome(token : string) {

//     let tokenString = 'Bearer ' + token;

//     const httpOptions = {

//       headers : new HttpHeaders({
//         "Authorization" : tokenString,
//         "Content-Type" : "application/json",
//         "Access-Control-Allow-Credentials" : "true",
//         responseType : "text" as "json"
//       })

//     }

//     return this.httpclient.get(this.toLocalPort + "welcome", httpOptions);

//   }

//   login(movie : Movie) { };

 
// }






















/*
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true'

    })
  }
*/


  // public addMovie(movie : Movie) : Observable<string> {

  //   console.log("Sending Movie : " + movie);

  //   (this.httpclient.post<string>(('http://localhost:8085/movie'),JSON.stringify(movie), {responseType:'text' as 'json'}))
  //     .generateToken(movie).subscribe(
  //     data => { 
  //     let tokenized : any = sessionStorage.setItem("token", data);
  //     console.log ("Movie Sent , Received data : " + data);

  // }



/*
 constructor(
      private service : UserServiceService, 
      private router: Router
  ) {}
  

  tokenized:any;
  
  forgetpass(){
      this.router.navigateByUrl("forgetpass")
  }
  
  doLogin(fdata: LoginInfo) {
  
   // console.log(fdata.username);
    this.service.generateToken(fdata).subscribe(
      data=>{
        this.tokenized =sessionStorage.setItem("token", data);
        console.log(data);
      }

    )
  }
 
*/


// public generateToken(request:LoginInfo):Observable<string> {
//   return this.http.post<string>("http://localhost:8085/loginauth", request, {responseType:'text' as 'json'});
// }




