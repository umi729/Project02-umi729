import { Component, OnInit, Renderer2 } from '@angular/core';

import { SearchbarComponent } from '../searchbar/searchbar.component';

import { Movie } from '../models/movie';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
 /* template: `SentMovie : {{movie}}
            <app-searchbar (sendMovie)="receiveMessage*/
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(   
    private router:Router, 
    private renderer : Renderer2,
    //private searchbar : SearchbarComponent
  ) { }

  //private readonly root : HTMLElement | null = document.querySelector('app-home');

  private homeDiv : HTMLElement = document.createElement('div');
  private searchbarDiv : HTMLElement = document.createElement('div');

  private searchbar : HTMLElement | null= document.querySelector('app-searchbar'); 


  public activeMovie : Movie = new Movie("","This Is A Title Change", "", "", "", "");

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.router.navigateByUrl('login');
    }
    //this.renderer.appendChild(document.querySelector('app-home'), document.querySelector('app-searchbar'));

    

    this.renderer.appendChild(document.querySelector('app-home'), this.homeDiv);

    this.renderer.appendChild(this.homeDiv, this.searchbarDiv);

    //this.activeMovie = document.querySelector('app-home').getMovie();

    //this.renderer.appendChild(this.searchbarDiv, document.querySelector('app-searchbar'));

  }
    updateMovie($event : any) {

      console.error("Home : Updating Movie");

      this.activeMovie = $event;

    }


  

}
