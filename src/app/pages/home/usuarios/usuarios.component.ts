import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from "../../../services/user.service";
import {UserModel} from "../../../models/user.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {

  usuario: UserModel = new UserModel();
  usuarios: any = [{
    NombreCompleto : 'Alejandro Molina',
    Direccion: 'Temblarani pasaje ochoa',
    Email: 'ale@gmail.com',
    Telefono: '72821908',
    Genero: 'Hombre'
  }];
  usuarioEditar: any = '';
  usuarioRolesEditar: any[] = [];

  index: number = 0;
  indexEliminar: number = 0;
  roles: any = '';

  rolesEditar: any[];

  constructor( private service: UserService ) { }

  ngOnInit(): void {
    this.service.pedirUsuarios().subscribe( resp => {
      // console.log(resp);
      this.usuarios = resp;

      this.listarRoles();
    });

  }

  llenarEditar( i: number ) {
    this.rolesEditar = [];
    this.usuarioEditar = this.usuarios[i];
    this.index = i;

    this.listarRolesBool();
  }

  listarRoles() {
    this.service.pedirRoles().subscribe(resp => {
      this.roles = resp;
      // console.log(this.roles);
    });
    // console.log(this.usuarioEditar);

  }

  listarRolesBool() {
    for ( let i = 0; i < this.roles.length; i++ ){
      let rr = this.roles[i]._id;
      // console.log('Rol: ',rr)
      for (let j = 0; j < this.usuarioEditar.Rols.length; j++){
        let rr2 = this.usuarioEditar.Rols[j].IdRol._id;
        // console.log('User rol:',rr2);
        if (rr === rr2) {
          this.usuarioRolesEditar[i] = true;
          break;
        } else{
          this.usuarioRolesEditar[i] = false;
        }
      }
    }
  }

  selectRol(event, index ){
    this.usuarioRolesEditar[index] = event;
    // console.log(this.usuarioRolesEditar);
  }

  editarUsuario(nc, ce, d, g, t) {

    this.usuario.NombreCompleto = nc.value;
    this.usuario.Email = ce.value;
    this.usuario.Direccion = d.value;
    this.usuario.Genero = g.value;
    this.usuario.Telefono = t.value;

    for (let i=0;i<this.usuarioRolesEditar.length;i++){
      let ure = this.usuarioRolesEditar[i];
      if (ure === true) {
        this.rolesEditar.push({
          IdRol: this.roles[i]._id
        })
      }
    }

    this.usuario.Rols = this.rolesEditar;
    // console.log(this.usuario);


    this.service.actualizarUsuario( this.usuario, this.usuarioEditar._id ).subscribe( resp => {
      // this.usuarios[this.index] = resp;
      // this.rolesEditar = [];
      this.usuarios[this.index] = resp;
      // location.reload();
    });
  }

  eliminarUsuario(i: number) {
    this.indexEliminar = i;
    // console.log(this.indexEliminar);

  }

  confirmarEliminacion() {
    this.service.deleteUsuario( this.usuarios[this.indexEliminar]._id ).subscribe(() => {
      location.reload();
    });
  }

  buscarUsuario(query) {
    let qr = query.value;

    this.service.buscarUsuario(qr).subscribe(resp => {
      console.log(resp);
      this.usuarios = resp;
    });
  }

}
