import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-productos-editar',
  templateUrl: './productos-editar.component.html',
  styles: [
  ]
})
export class ProductosEditarComponent implements OnInit {

  productos: any = '';
  productoEditar: any = '';
  editarIndex: number = 0;

  constructor( private service: UserService, private router: Router ) { }

  ngOnInit(): void {
    this.service.listarProductos().subscribe(resp => {
      this.productos = resp;
      console.log(this.productos);
    });
  }

  editarProducto(index: number) {
    this.editarIndex = index;
    this.productoEditar = this.productos[this.editarIndex];
  }


}
