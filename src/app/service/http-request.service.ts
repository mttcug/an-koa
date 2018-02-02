import { Injectable , Inject} from '@angular/core';
import {  Http, Response, RequestOptions, Headers } from  '@angular/http';

@Injectable()
export class HttpRequestService {

  constructor(private http:Http) { }


  request(){
    this.http.get('./quote').subscribe(res=>{
      let result=res;
    })
  }



}
