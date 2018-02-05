import { Component, OnInit } from '@angular/core';
import {  Http, Response, RequestOptions, Headers } from  '@angular/http';

@Component({
  selector: 'app-computer-sort',
  templateUrl: './computer-sort.component.html',
  styleUrls: ['./computer-sort.component.css']
})
export class ComputerSortComponent implements OnInit {

  constructor(private http:Http) {
    this.request();
  }

  ngOnInit() {
  }

  request(){
/*    this.http.get('./quote').subscribe(res=>{
      let result=res;
      console.log("requestRES:",result);
    })*/
  }


}
