import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:3000'

  constructor( private http: HttpClient ) { }

  login( user: UserModel ) {
    // console.log(user);

    return this.http.post( `${this.url}/user/login`, user );
  }

}
