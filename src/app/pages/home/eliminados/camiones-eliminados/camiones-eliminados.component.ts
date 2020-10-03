import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-camiones-eliminados',
  templateUrl: './camiones-eliminados.component.html',
  styles: [
  ]
})
export class CamionesEliminadosComponent implements OnInit {

  camionesEliminados: any = '';
  indexHabilitar: number = null;
  camionHabilitar: any = '';

  constructor( private service: UserService ) { }

  ngOnInit(): void {
    this.service.listarCamionesEliminados().subscribe(resp => {
      this.camionesEliminados = resp;
    });
  }

  botonHabilitar(index) {
    this.indexHabilitar = index;
    this.camionHabilitar = this.camionesEliminados[this.indexHabilitar];
  }

  habilitar() {
    this.service.habilitarCamion(this.camionHabilitar._id).subscribe(resp => {
      location.reload();
    });
  }

}
