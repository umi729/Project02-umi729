import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from '../models/movie'
import { Review } from '../models/review'
import { DateFormaterService } from './date-formater.service';
import { ReviewBack } from '../models/review-back';
//import { ifError } from 'assert';


@Injectable({
  providedIn: 'root'
})
export class ReviewToBackendService {

  constructor(private http : HttpClient, private dateFormater: DateFormaterService) { }

   overrideNull(): string {
    if (localStorage.getItem('token') === null) return '';
    return localStorage.getItem('token') as any;
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

  public getReviews(movieId:string):Observable<ReviewBack[]> {
    return this.http.get<ReviewBack[]>("http://localhost:8085/review/reviewsByMovie/" + movieId, this.httpOptions);
  }

  public addReview(review:Review): Observable<Review[]> {
    review.movie.release = this.dateFormater.formatDate(review.movie.release.toString());
    console.log(this.overrideNull());
    
    const headers = new HttpHeaders({
      Authorization: this.overrideNull(),
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Accept' : "*/*"
    });
    /*let releaseDate : String = review.movie.release;
    console.log("Release date pre-formatting:");
    console.log(releaseDate);
    review.movie.release = this.dateFormater.formatDate(releaseDate.toString());*/
    console.log("final review object:");
    console.log(review);
    return this.http.post<Review[]>("http://localhost:8085/review/addReview",JSON.stringify(review), this.httpOptions);
  }

}