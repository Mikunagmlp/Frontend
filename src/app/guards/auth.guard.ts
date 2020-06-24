import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "../services/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private service: UserService, private router: Router ) {
  }

  canActivate(): boolean{
    if ( this.service.estaAutenticado() ) {
      return true;
    } else{
      this.router.navigateByUrl('/login');
      // this.router.navigateByUrl('/home');
      return false;
    }
  }

}
