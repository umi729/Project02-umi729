import { ThisReceiver } from '@angular/compiler';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { Review } from '../models/review';
import { ReviewBack } from '../models/review-back';
import { ApiService } from '../services/api.service';
//import { MovieToBackendService } from '../services/movie-to-backend.service';
import { ReviewToBackendService } from '../services/review-to-backend.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  styles: [`
    .star {
      position: relative;
      display: inline-block;
      font-size: 3rem;
      color: #d3d3d3;
    }
    .full {
      color: red;
    }
    .half {
      position: absolute;
      display: inline-block;
      overflow: hidden;
      color: red;
    }
  `]
})
export class ReviewsComponent implements OnInit {

  movie = new Movie("", "", "", "", "", "");;
  reviews : Array<ReviewBack> = [];
  reviewAdd : Array<Review> = [];
  rating : number = 1;
  content : string = '';

  public currentStars : number = 0;

    public a = 0.9;

    public sum = 0;
    public average = 0;
    public rate = this.average;


  constructor(//private movieService: MovieToBackendService,
              private reviewService: ReviewToBackendService,
              public router : ActivatedRoute,
              public apiServicer : ApiService) { }

  ngOnInit() {

    this.ngOnChanges();

   }

  ngOnChanges(): void {  

    this.reviews = [];




    this.apiServicer.getSeriesMovieData(this.router.snapshot.paramMap.get("id")).subscribe(res2 => {
      this.movie = new Movie(res2.imdbID, res2.Title, res2.Released, res2.Plot, res2.Genre, res2.Director);
      console.log("Current movie: " + this.movie.title);
      this.populateReviews();
    });

  }

  submitReview(){
    console.log("input fields: content: " + this.content + " rating: " + this.rating);
    let user = sessionStorage.getItem('user');
    if(user){
      user = JSON.parse(user);
    }
    let newReview : Review = new Review(Object(user).username, this.movie, this.currentStars, this.content);
    console.log("review:");
    console.log(newReview);

    this.reviewService.addReview(newReview).subscribe(reviewList =>{
      this.reviewAdd = reviewList;
      this.ngOnChanges();


    });

    
    // this.ngOnChanges();
    //this.ngOnChanges();

    //this.ngAfterCOntentChecked();

  }

  populateReviews(){
    this.reviewService.getReviews(this.movie.imdbId).subscribe(
      reviewList => {
        if(reviewList){

            console.log("Review List: ");
            console.log(this.reviews);

          this.sum = 0;
          this.average = 0;

          for (let i = 0; i < reviewList.length; ++ i) {

            this.sum += reviewList[i].starRating;

            console.log(reviewList[i]);

            this.reviews.push(reviewList[i]);

           }

          this.average = this.sum / reviewList.length;

          console.log("Moviebook Average Rating : " + this.average);

          // this.reviews = reviewList;
          // console.log(this.reviews);
        }
      }
    )
  }

  userHasReview() : boolean{
    let u = sessionStorage.getItem('user');
    let user = JSON.parse(u ? u : 'oops');
    let hasReview : boolean = false;
    this.reviews.forEach(review => {

      if(user.username === review.rid){
        hasReview = true;
      }

    });
    return hasReview;
  }

}