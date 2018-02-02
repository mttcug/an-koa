import { Component, OnInit } from '@angular/core';
import {AccordionConfig} from 'ngx-bootstrap';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  tabObj:object = {
    'computerShow':true,
    'englistShow':false
  }

  toggleTab(tab:string):void{
    this.tabObj[tab]=!this.tabObj[tab];
  }


}
