import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-searchbar2',
  templateUrl: './searchbar2.component.html',
  styleUrls: ['./searchbar2.component.css'],
})
export class Searchbar2Component implements OnInit {
  constructor(private apiServicer: ApiService) { }
  rest: any[] = [];
  res2: any;
  res: any;
  dosomething(search: any) {
    if (!(sessionStorage.getItem('result2') == null)) {
      sessionStorage.removeItem('result2');
    }

    this.res = this.apiServicer.fetchAllMovies(search.seah).then(data => {
      for (let i: any = 0; i < data.Search.length; i++) {
        this.rest.length = 0;
        this.res2 = this.apiServicer.fetchSeriesMovies(
          data.Search[i].imdbID
        ).then(data2 => {
        //console.log(data2);
        this.rest.push(data2);

        if (data.Search.length - 1 == i) {
          //console.log(this.rest);
          sessionStorage.setItem('result2', JSON.stringify(this.rest));
        }
      });
      }
    
    }
    );



  }
  ngOnInit(): void {

}

}
