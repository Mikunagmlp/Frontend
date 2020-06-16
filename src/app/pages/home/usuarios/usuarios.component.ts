import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from "../../../services/user.service";
import {UserModel} from "../../../models/user.model";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {

  usuario: UserModel = new UserModel();
  usuarios: any;
  usuarioEditar: any = '';
  index: number = 0;

  constructor( private service: UserService ) { }

  ngOnInit(): void {
    this.service.pedirUsuarios().subscribe( resp => {
      console.log(resp);
      this.usuarios = resp;
    });
  }

  llenarEditar( i: number ) {
    this.usuarioEditar = this.usuarios[i];
    this.index = i;
  }


  editarUsuario(nc, ce, d, g, t) {

    this.usuario.NombreCompleto = nc.value;
    this.usuario.Email = ce.value;
    this.usuario.Direccion = d.value;
    this.usuario.Genero = g.value;
    this.usuario.Telefono = t.value;

    this.service.actualizarUsuario( this.usuario, this.usuarioEditar._id ).subscribe( resp => {
      this.usuarios[this.index] = resp;
    });
  }

}
