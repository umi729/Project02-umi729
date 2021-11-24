import { Injectable } from '@angular/core';

import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieInfoHolderService {

  public storedMovie : Movie;

  constructor() {

    this.storedMovie = new Movie("", "", "", "", "", "");

  }

  setMovie(movie : Movie) {


    this.storedMovie = movie;

    console.log("Stored Movie : ")
    console.log(this.storedMovie);

  }

  getMovie() : Movie {

    console.log("Returning Movie : ");
    console.log(this.storedMovie);

    return this.storedMovie;

  }

}
