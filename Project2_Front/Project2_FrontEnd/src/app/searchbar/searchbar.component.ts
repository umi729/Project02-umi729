import { Component, OnInit, Renderer2, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '../models/movie';

//import { MovieToBackendService } from '../services/movie-to-backend.service';
import { HideComponentService } from '../services/hide-component.service';
import { DateFormaterService } from '../services/date-formater.service';
import { ApiService } from '../services/api.service';
import { MovieInfoHolderService } from '../services/movie-info-holder.service';
import { ImdbMultiData } from '../models/imdb-multi-data';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})



export class SearchbarComponent implements OnInit {

  constructor( 
    private renderer : Renderer2,
    //private movieToBackend : MovieToBackendService,
    private hider : HideComponentService,
    private dateFromatter : DateFormaterService,
    private apiServicer : ApiService,
    private movieInfoHoler : MovieInfoHolderService,
    private router : Router
  ) { }



  public userInput : string = "";

  public firstFlat : number = 0;
  public firstFlag : number = 0;

  public searchQuery : String = "";



  function2(movieValue : string) {

    this.userInput = movieValue;

    console.log("User Input : " + this.userInput);

    this.apiServicer.getAllMovies(this.userInput).subscribe(
      res => {
    for(let i:any=0; i<Object(res).Search.length; i++){ 
      this.rest.length=0;


    this.apiServicer.getSeriesMovies(Object(res).Search[i].imdbID).subscribe(res2=>{

      this.rest.push(res2)
      

        if((Object(res).Search.length-1)==i){
          console.log(this.rest)
          sessionStorage.setItem("result", JSON.stringify(this.rest));
        }
        })
   
      } // << End FOr Loop

    }) // << End Of API First Subscription

  }

  rest:any[]=[];

  dosomething2() {

   // console.log("Do Something 2");

    let sea = "";

    if (!(sessionStorage.getItem('result') == null)) { 
      sessionStorage.removeItem('result');
    }
 



  this.apiServicer.getAllMovies(sea).subscribe(res=>{
    console.warn(res)
    for(let i:any=0; i<Object(res).Search.length; i++){ 
      this.rest.length=0;

          //console.log(sea);

          if (sea == undefined) {

           // console.log("Undefined Capture");

          }

    this.apiServicer.getSeriesMovies(Object(res).Search[i].imdbID).subscribe(res2=>{
      
      

      this.rest.push(res2)
      
      //if (this.firstFlag != 0) {

        if((Object(res).Search.length-1)==i){
         // console.log(this.rest)
          sessionStorage.setItem("result", JSON.stringify(this.rest));
        }
})
   
    } // << End FOr Loop

    

  }) // << End Of API First Subscription

  }


  dosomething(formValue : NgForm){

    //console.log("Do Something");

/*
    console.log(formValue.submitted);
    console.log(formValue.valid);
    console.log(formValue.pending);
    console.log(formValue.dirty);
*/

    //if (formValue.dirty == false) { return; }

    sessionStorage.setItem("result", "");

   // console.log(this.rest);

    this.firstFlat = 0;

    //let holder : Object = {seah: ""}
    //holder = formValue.value;

    //console.log(holder);

    //console.log(formValue.value);


    //let temp : Object = "Temporary Test";

    //holder.createProperty(temp) = "Temporary Test"//(temp);

   // console.log(formValue.value);



    if (formValue.value.seah === undefined) {

      this.firstFlat = 1;

      //Object(holder).seah = "";

      //formValue.value.seah = "";

    }

    // console.log(formValue.value);


    // console.log("First : " + this.firstFlat);

    


    if (formValue.value.seah !== undefined) {

      //return;

    }


   let sea : any = formValue.value;

    if (!(sessionStorage.getItem('result') == null)) { 
      sessionStorage.removeItem('result');
    }
 



  this.apiServicer.getAllMovies(sea.seah).subscribe(res=>{
    console.warn(res)
    for(let i:any=0; i<Object(res).Search.length; i++){ 
      this.rest.length=0;

          // console.log(formValue.value);

          // if (formValue.value == undefined) {

          //   console.log("Undefined Capture");

          // }

    this.apiServicer.getSeriesMovies(Object(res).Search[i].imdbID).subscribe(res2=>{
      
      

      this.rest.push(res2)
      
      //if (this.firstFlag != 0) {

        if((Object(res).Search.length-1)==i){
          //console.log(this.rest)
          sessionStorage.setItem("result", JSON.stringify(this.rest));
        }


      //}
      /*else {

                this.firstFlag = 1;


      }*/

    })
   
    } // << End FOr Loop

    

  }) // << End Of API First Subscription

  

  
   //let firstNameControl = "Bernshtein";

   this.ngOnInit();

    //const firstNameControl = new FormControl();;

    //let tempform = new NgForm();

    //this.dosomething('Emoji Movie');

  }

  //public input2 : any = "W";

  //@Input() input2 : string = "";
  //@Output() input2Change = new EventEmitter<string>();

  //@Input() set input4(

  //public input3 :string = "";


/*
    this.apiServicer.getAllMovies(this.input3).subscribe(res=>{
    for(let i:any=0; i<Object(res).Search.length; i++){ 
      this.rest.length=0;
    this.apiServicer.getSeriesMovies(Object(res).Search[i].imdbID).subscribe(res2=>{
      
      this.rest.push(res2)
      
      if((Object(res).Search.length-1)==i){
        console.log(this.rest)
        sessionStorage.setItem("result", JSON.stringify(this.rest));
      }
    })
   
    } // << End FOr Loop

  }) // << End Of API First Subscription
*/

    



  

  public submitButton : HTMLElement | null= document.getElementById("SearchMovieButton");

  

 // this.button2.innerText = "  Search Movie  ";
//     this.renderer.listen(this.button2, 'click', () => {
//       this.getInputString(this.input1);
//       this.queryAPI();
//     });



  notUndefined() : void {



  }

  ngOnInit(): void {

  let changevar = document.getElementById('changerID');

  this.renderer.setAttribute(changevar, 'style', "font-size: 20px");

/*
    let inputVar = document.getElementById('SearchMovieInput');

    Object(inputVar).value = "one";
    Object(inputVar).value = "";

    this.renderer.setAttribute(Object(document.getElementById('SearchMovieInput')), 'value', ''); 

  */

  //   this.renderer.listen(this.submitButton, 'click', (sea) => {

  //     //let sea = Object(document.getElementById('SearchMovieInput')).value;

      

  //   if (!(sessionStorage.getItem('result') == null)) { 
  //     sessionStorage.removeItem('result');
  //   }
 



  // this.apiServicer.getAllMovies(sea.seah).subscribe(res=>{
  //   for(let i:any=0; i<Object(res).Search.length; i++){ 
  //     this.rest.length=0;
  //   this.apiServicer.getSeriesMovies(Object(res).Search[i].imdbID).subscribe(res2=>{
      
  //     this.rest.push(res2)
      
  //     if((Object(res).Search.length-1)==i){
  //       console.log(this.rest)
  //       sessionStorage.setItem("result", JSON.stringify(this.rest));
  //     }
  //   })
   
  //   } // << End FOr Loop

  // }) // << End Of API First Subscription



  // });

  }

  ngOnChanges() : void {

    // //if (Object(document.getElementById('SearchMovieInput')).value) {
    // let queryValue : String | null = Object(document.getElementById('SearchMovieInput')).value;

    // if (queryValue) {
    // this.searchQuery = queryValue;
    // }

  }

  ngOnChange(): void {

    sessionStorage.removeItem('result');

  }

}