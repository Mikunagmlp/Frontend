import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-almacenes-eliminados',
  templateUrl: './almacenes-eliminados.component.html',
  styles: [
  ]
})
export class AlmacenesEliminadosComponent implements OnInit {

  almacenes: any = '';
  indexHabilitar: number = null;
  almacenHabilitar: any = '';

  constructor( private service: UserService ) { }

  ngOnInit(): void {
    this.service.listarAlmacenesEliminados().subscribe(resp => {
      this.almacenes = resp;

      // console.log(this.almacenes);
    });
  }

  botonHabilitar(index) {
    this.indexHabilitar = index;
    this.almacenHabilitar = this.almacenes[this.indexHabilitar];

    console.log(this.almacenHabilitar);
  }

  habilitar(){
    this.service.habilitarAlmacen( this.almacenHabilitar._id ).subscribe(resp => {
      location.reload();
    });
  }

}
