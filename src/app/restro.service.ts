import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RestroService {
  headers: HttpHeaders;
  constructor(private httpclient :HttpClient) { 

    this.headers = new HttpHeaders();
    this.headers  = this.headers .set('Content-Type', 'application/json; charset=utf-8');
  
  }
  public postResaturentMenu(data:any)
    {  //alert('postResaturentMenu')
      const body = JSON.stringify(data);
      let options = {
        headers: this.headers
      }; 
    const url='http://192.168.1.6:5000/addmenu/'
   
    return this.httpclient.post(url,body,options)
   
  }
  
}
