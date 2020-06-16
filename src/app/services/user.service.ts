import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from "../models/user.model";

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:3000'

  constructor( private http: HttpClient ) { }

  login( user: UserModel ) {
    return this.http.post( `${this.url}/user/login`, user ).pipe(
      map(resp => {
        localStorage.setItem('usuarioEstado', resp['Estado']);
        localStorage.setItem('usuarioID', resp['_id']);
        localStorage.setItem('usuarioNombreCompleto', resp['NombreCompleto']);
        localStorage.setItem('usuarioEmail', resp['Email']);
        localStorage.setItem('usuarioTelefono', resp['Telefono']);
        localStorage.setItem('usuarioDireccion', resp['Direccion']);
        localStorage.setItem('usuarioGenero', resp['Genero']);

        return resp;
      })
    );
  }

  pedirUsuarios() {
    return this.http.get(`${this.url}/administracion/users`);
  }

  actualizarUsuario( user: UserModel, id: string ) {
    return this.http.patch(`${this.url}/administracion/user/editar/${id}`, user);
  }

}
