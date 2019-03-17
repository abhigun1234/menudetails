import { Component, OnInit } from '@angular/core';
import {RestroService} from '..//restro.service'
@Component({
  selector: 'app-postrestaurentment',
  templateUrl: './postrestaurentment.component.html',
  styleUrls: ['./postrestaurentment.component.css']
})
export class PostrestaurentmentComponent implements OnInit {

  constructor(private restro:RestroService) { }

  ngOnInit() {
  }

 public postdata(data :any)
  {  alert("hi")
     this.restro.postResaturentMenu(data).subscribe(res=>{

      console.log(res)
   

     },error=>{

      alert(error)
      console.log(error)
     })

  }

  public login(data:any)
  {
    this.restro.login(data).subscribe(res=>{
      
            console.log(res)
            /* 
            localstorage.setItem('token',res.token)
            
            */
      
           },error=>{
      
            alert(error)
            console.log(error)
           })

  }
 

}
