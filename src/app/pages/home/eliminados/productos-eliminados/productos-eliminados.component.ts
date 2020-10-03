import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-productos-eliminados',
  templateUrl: './productos-eliminados.component.html',
  styles: [
  ]
})
export class ProductosEliminadosComponent implements OnInit {

  productosEliminados: any = '';
  indexHabilitar: number = null;
  productoHabilitar: any = '';

  constructor( private service: UserService ) { }

  ngOnInit(): void {
    this.service.listarProductosEliminados().subscribe(resp => {
      this.productosEliminados = resp;
    });
  }

  botonHabilitar(id){
    this.indexHabilitar = id;
    this.productoHabilitar = this.productosEliminados[this.indexHabilitar];
  }

  habilitar() {
    this.service.habilitarProducto( this.productoHabilitar._id ).subscribe(resp => {
      location.reload();
    });
  }

}
