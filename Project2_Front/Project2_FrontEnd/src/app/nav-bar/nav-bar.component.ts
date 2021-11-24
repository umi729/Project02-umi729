import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public currentUser = ''
  public route = '/login'
  constructor(private router: Router) { }
   
  show:any;
  
  logout(){
    
    localStorage.clear();
    sessionStorage.clear();
   this.show=0;
    this.router.navigateByUrl("login")
    this.ngOnInit();
  }

  ngOnInit(): void {
    if(!(localStorage.getItem("token")==null)) {
      this.show=1;
      this.route = '/home';
    }
    else {
      this.show=0;
      this.route = '/login';
    }
    
  }
  ngAfterViewInit(): void {
    if(!(localStorage.getItem("token")==null)){
      this.show=1;
      this.route = '/home';
    }
    
  }
  ngDoCheck(){
    if(!(localStorage.getItem("token")==null)){
      this.show=1;
      this.route = '/home';
    }
  }

}
