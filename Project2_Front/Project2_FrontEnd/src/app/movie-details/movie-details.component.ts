import { Component, OnInit, SimpleChange } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ImdbMultiData } from '../models/imdb-multi-data';
import { AllMovieData } from '../models/all-movie-data';
import {ReviewsComponent} from '../reviews/reviews.component'
import { ApiService } from '../services/api.service';
import { FavoriteService } from '../services/favorite.service';
//import { MovieToBackendService } from '../services/movie-to-backend.service';
import { DateFormaterService } from '../services/date-formater.service';
import { Movie } from '../models/movie';
import { Favorite } from '../models/favorite';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(
    public router : ActivatedRoute,
    public route: Router,
    public apiServicer : ApiService,
    public favoriteService : FavoriteService,
    //public movietoBackend : MovieToBackendService,
    public dateFormatter : DateFormaterService
  ) { }

  public currentRate = 0;
  public averageRate = 0;
  public buttonState : number = 0;
  public movieData :  AllMovieData | null = null;

  ngOnInit(): void {

    if (localStorage.getItem('token') == null) {
      this.route.navigateByUrl('login');
    }
    console.log(this.router.snapshot.paramMap.get("id"));
    this.apiServicer.getSeriesMovieData(this.router.snapshot.paramMap.get("id")).subscribe(
    res2 => {

      console.log(res2);

      this.movieData = res2;

      console.log(this.movieData);

      console.log(res2.Title);
      
    
    
    })
    let user = sessionStorage.getItem('user');
    if (user) {
      user = JSON.parse(user);
    }
    this.favoriteService.getMyFavorites(Object(user).userId).subscribe(
      data => {
        let tokenized : any = sessionStorage.setItem("token", data.toString());
        console.log(data);
        for (let item of Object(data)) {
          if (item.movie.imdbId == this.router.snapshot.paramMap.get("id")) {
            this.buttonState = 1;
            let heart = <HTMLElement> document.getElementsByClassName('mat-warn')[0];
            heart.style.backgroundColor = '#ff1515';
            heart.style.color = '#ffffff';
          }
        }
        // this.favorites = Object(data);
      }
    )
    

  }
  ngOnChanges(changes: SimpleChange): void {
    console.log(this.currentRate);
  }

  public onFav() {
    if (this.buttonState == 0) {
      if (this.movieData != null) {
        let date = this.dateFormatter.formatDate(this.movieData.Released)
        let movie = new Movie(this.movieData?.imdbID, this.movieData?.Title, date, this.movieData?.Plot, this.movieData?.Genre, this.movieData?.Director);
        console.log(movie);
        // this.movietoBackend.generateToken(movie).subscribe(
        //         data => {
        //           let tokenized : any = sessionStorage.setItem("token", data.toString());
        //           console.log(data);
        //         }
        //       )

        let user = sessionStorage.getItem('user');
        if (user) {
          user = JSON.parse(user);
        }
        let username = Object(user).username;
        let userId = Object(user).userId;

        let favorite = new Favorite(username, userId, movie);
        console.log(favorite);

        this.favoriteService.addFavorite(favorite).subscribe(
          data => {
            let tokenized : any = sessionStorage.setItem("token", data.toString());
            console.log(data);
          }
        )

      }
      this.buttonState = 1;
      let heart = <HTMLElement> document.getElementsByClassName('mat-warn')[0];
      heart.style.backgroundColor = '#ff1515';
      heart.style.color = '#ffffff';
    }
    // } else {
    //   if (this.movieData != null) {
    //     let date = this.dateFormatter.formatDate(this.movieData.Released)
    //     let movie = new Movie(this.movieData?.imdbID, this.movieData?.Title, date, this.movieData?.Plot, this.movieData?.Genre, this.movieData?.Director);
    //     console.log(movie);
    //     // this.movietoBackend.generateToken(movie).subscribe(
    //     //         data => {
    //     //           let tokenized : any = sessionStorage.setItem("token", data.toString());
    //     //           console.log(data);
    //     //         }
    //     //       )

    //     let user = sessionStorage.getItem('user');
    //     if (user) {
    //       user = JSON.parse(user);
    //     }
    //     let username = Object(user).username;
    //     let userId = Object(user).userId;

    //     let favorite = new Favorite(username, userId, movie);
    //     console.log(favorite);

    //     this.favoriteService.deleteFavorite(userId, movie.imdbId);
    // }
  }

}
