import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from "../models/user.model";
import { HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import {RolModel} from "../models/rol.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor( private http: HttpClient ) { }

  private url = 'http://localhost:3000';
  private header = new HttpHeaders();
  private userToken = localStorage.getItem('usuarioToken');



  login( user: UserModel ) {
    return this.http.post( `${this.url}/signin`, user ).pipe(
      map(resp => {
        localStorage.setItem('usuarioEstado', resp['user']['Estado']);
        localStorage.setItem('usuarioID', resp['user']['_id']);
        localStorage.setItem('usuarioNombreCompleto', resp['user']['NombreCompleto']);
        localStorage.setItem('usuarioEmail', resp['user']['Email']);
        localStorage.setItem('usuarioTelefono', resp['user']['Telefono']);
        localStorage.setItem('usuarioDireccion', resp['user']['Direccion']);
        localStorage.setItem('usuarioGenero', resp['user']['Genero']);
        localStorage.setItem('usuarioToken', resp['token']);

        return resp;
      })
    );
  }

  // preguntamos si esta autenticando verificando el token
  estaAutenticado() {
    let token = localStorage.getItem('usuarioToken');

    if (!token) {
      return false;
    }

    return true;
  }

  pedirUsuarios() {
    console.log(this.userToken);
    this.header = this.header.set('x-access-token', this.userToken );

    return this.http.get(`${this.url}/administracion/users`,{ headers: this.header });
  }

  actualizarUsuario( user: UserModel, id: string ) {
    return this.http.patch(`${this.url}/administracion/user/editar/${id}`, user);
  }

  deleteUsuario(id: string) {
    return this.http.delete(`${this.url}/administracion/user/eliminar/${id}`);
  }

  registrarUsuario(usuario: UserModel) {
    return this.http.post(`${this.url}/administracion/user/registro`, usuario);
  }

  crearRol(rol: RolModel) {
    return this.http.post(`${this.url}/rol/create`, rol );
  }

  pedirRoles() {
    return this.http.get(`${this.url}/roles`);
  }

  actualizarRol( rol: RolModel, id ) {
    return this.http.put( `${this.url}/rol/editar/${id}`, rol );
  }

  disableRol( id: string ) {
    return this.http.put( `${this.url}/rol/desable/${id}`, { Estado: false }  );
  }

}
