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
  index: number = 0;
  indexEliminar: number = 0;
  roles: any = '';

  constructor( private service: UserService, private router: Router ) { }

  ngOnInit(): void {
    this.service.pedirUsuarios().subscribe( resp => {
      // console.log(resp);
      this.usuarios = resp;
    });
  }

  llenarEditar( i: number ) {
    this.usuarioEditar = this.usuarios[i];
    this.index = i;

    this.listarRoles();
  }

  listarRoles() {
    this.service.pedirRoles().subscribe(resp => {
      this.roles = resp;
      console.log(this.roles);
    });
    console.log(this.usuarioEditar);
  }

  editarUsuario(nc, ce, d, g, t) {

    this.usuario.NombreCompleto = nc.value;
    this.usuario.Email = ce.value;
    this.usuario.Direccion = d.value;
    this.usuario.Genero = g.value;
    this.usuario.Telefono = t.value;

    // console.log(this.usuario);

    this.service.actualizarUsuario( this.usuario, this.usuarioEditar._id ).subscribe( resp => {
      this.usuarios[this.index] = resp;
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

}
