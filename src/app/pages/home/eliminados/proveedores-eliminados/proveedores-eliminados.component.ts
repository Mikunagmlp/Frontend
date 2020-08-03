import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-proveedores-eliminados',
  templateUrl: './proveedores-eliminados.component.html',
  styles: [
  ]
})
export class ProveedoresEliminadosComponent implements OnInit {

  proveedoresEliminados: any = '';
  indexHabilitar: number = null;
  proveedorHabilitar: any = '';

  constructor( private service: UserService ) { }

  ngOnInit(): void {
    this.service.listarProveedoresEliminados().subscribe(resp => {
      this.proveedoresEliminados = resp;
    });
  }

  botonHabilitar(index){
    this.indexHabilitar = index;
    this.proveedorHabilitar = this.proveedoresEliminados[this.indexHabilitar];

    console.log(this.proveedorHabilitar);
  }

  habilitar() {
    this.service.habilitarProveedor( this.proveedorHabilitar._id ).subscribe(resp => {
      location.reload();
    });
  }

}
