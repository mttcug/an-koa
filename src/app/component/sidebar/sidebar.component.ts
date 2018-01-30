import { Component, OnInit } from '@angular/core';
import {AccordionConfig} from 'ngx-bootstrap';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getContentHeight();
  }
  oneAtATime:boolean = true;
  contentHeight:number;

  getContentHeight():void{
    let windowHeight = window.innerHeight;
    this.contentHeight = windowHeight-200;
  }
}
