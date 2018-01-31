import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  contentHeight:number;

  getContentHeight():string{
    let windowHeight = window.innerHeight;
    this.contentHeight = windowHeight-200;
    return this.contentHeight.toString()
  }
}
