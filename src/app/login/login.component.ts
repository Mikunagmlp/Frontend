import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

import { UserModel } from "../models/user.model";

import { UserService } from "../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel();

  constructor( private userService: UserService ) { }

  ngOnInit(): void {
  }

  login( form: NgForm ) {
    if ( form.invalid ) { return ; }

    this.userService.login( this.user ).subscribe( resp => {
      console.log(resp);
    });
  }

}
