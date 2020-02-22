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
    const url='http://192.168.1.19:5000/addmenu/'
    //http://192.168.1.6:5000/getMenuDetails/
    //https://github.com/abhigun1234/menudetails.git
   
    return this.httpclient.post(url,body,options)
   
  }
  public getMenu()
  {

    return this.httpclient.get('http://192.168.1.5:5000/getMenuDetails/')
  }
}
