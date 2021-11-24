import { Injectable, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HideComponentService {

  constructor() { }

  hideComponent (body : HTMLElement) {

    console.log("Hiding HTMLElement : " + body);

    while (body.firstChild) {

      body.removeChild(body.firstChild);

    }

    body.setAttribute('style', "");

    return;

  }

}
