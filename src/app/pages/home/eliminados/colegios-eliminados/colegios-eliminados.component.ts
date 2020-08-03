import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-colegios-eliminados',
  templateUrl: './colegios-eliminados.component.html',
  styles: [
  ]
})
export class ColegiosEliminadosComponent implements OnInit {

  colegioEliminados: any = '';
  indexHabiliar: number = null;
  colegioHabilitar: any = '';

  constructor( private service: UserService ) { }

  ngOnInit(): void {
    this.service.listarColegiosEliminados().subscribe(resp => {
      this.colegioEliminados = resp;

    });
  }

  botonHabilitar(index) {
    this.indexHabiliar = index;
    this.colegioHabilitar = this.colegioEliminados[this.indexHabiliar];

    console.log(this.colegioHabilitar);
  }

  habilitar(){
    this.service.habilitarColegio(this.colegioHabilitar._id).subscribe(resp => {
      location.reload();
    })
  }

}
