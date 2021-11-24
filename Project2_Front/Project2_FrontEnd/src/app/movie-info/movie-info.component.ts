import { Component, OnInit, Renderer2, Input } from '@angular/core';

import { SearchbarComponent } from '../searchbar/searchbar.component';

import { MovieInfoHolderService } from '../services/movie-info-holder.service';

import { Movie } from '../models/movie';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import {Router} from '@angular/router'



@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  @Input() movie : Movie = new Movie("", "", "", "", "", "");
  movieTitle:any[]=[];//this.movie.title;

  public titles : Array<String> = [];
  // public releases : Array<String> = [];
  // public synopsi : Array<String> = [];
  // public genres : Array<String> = [];
  // public directors : Array<String> = [];

  public movies : Array<Movie> = [];

  constructor(
    public router: Router,
    movieHolder : MovieInfoHolderService,
    //searchbar : SearchbarComponent,
    renderer : Renderer2,
    
  ) { }
    fds:any;
    
  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.router.navigateByUrl('login');
    }
   }

  ngAfterViewChecked() {
  
  this.movies.length=0;
  this.titles.length=0
  }// << End Of ngAfterViewChecked
   

  ngAfterContentChecked(){
    this.fds=sessionStorage.getItem('result');
    let result=JSON.parse(this.fds);
    //console.log(result.Title);
    
    if(result.length>0&& result!=null){
    

    for(let item of result){

      if (item.Type == "movie") {


        //console.log(item.Title)
        this.titles.push(item.Title);

        if (item.Plot != "N/A" && item.Genre != "N/A") {

          this.movies.push(new Movie(item.imdbID, item.Title, item.Released,
            item.Plot, item.Genre, item.Director));

        }
      }

    }
    }

    if (this.movies.length > 0) {
      sessionStorage.removeItem('result');
    }else {

      this.ngAfterContentChecked();

    }


  } // << End OF ngAfterCOntentChecked
 
}