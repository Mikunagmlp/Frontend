import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-usuarios-eliminados',
  templateUrl: './usuarios-eliminados.component.html',
  styles: [
  ]
})
export class UsuariosEliminadosComponent implements OnInit {

  usuariosEliminados: any = '';
  indexHabilitar: number = null;
  usuarioHabilitar: any = '';

  constructor( private service: UserService ) { }

  ngOnInit(): void {
    this.service.listarUsuariosEliminados().subscribe(resp => {
      this.usuariosEliminados = resp;

    });
  }

  botonHabilitar(i) {
    this.indexHabilitar = i;
    this.usuarioHabilitar = this.usuariosEliminados[this.indexHabilitar];

    console.log(this.usuarioHabilitar);
  }

  habilitar() {
    this.service.habilitarUsuario( this.usuarioHabilitar._id ).subscribe(resp => {
      location.reload();
    });
  }

}
