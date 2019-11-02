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
   {  //alert("hi")
  //    this.restro.postResaturentMenu(data).subscribe(res=>{

  //     console.log(res)
   

  //    },error=>{

  //     alert(error)
  //     console.log(error)
  //    })
  this.restro.postResaturentMenu(data).subscribe(response=>{

    console.log(response)
  })
  }

  
 

}
