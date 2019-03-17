import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot ,Router} from '@angular/router';
import { Observable } from 'rxjs';
import {RestroService} from './restro.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public restro:RestroService,public _router:Router)
  {


  }
  canActivate():boolean{

    if(this.restro.loggedIn())
      {
        return true
      }
      else
        {

        this._router.navigate(['/login'])
        return false
        }
  
  }
    
  
}
