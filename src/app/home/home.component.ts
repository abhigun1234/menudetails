import { Component, OnInit } from '@angular/core';
import {RestroService} from '..//restro.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private restro :RestroService) { }

  ngOnInit() {

    console.log(localStorage.getItem('local'))
    console.log(localStorage.getItem('session'))
  }

  public getMenuDetials()
  {
  alert('hello')
    this.restro.getMenu().subscribe(res=>{

      console.log(res)
    })
  }

}
