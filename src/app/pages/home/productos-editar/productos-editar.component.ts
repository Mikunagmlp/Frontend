import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {ProductoModel} from "../../../models/producto.model";

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
  producto: ProductoModel = new ProductoModel();

  almacenes: any = '';
  proveedores: any = '';

  eliminarIndex: number = 0;

  constructor( private service: UserService, private router: Router ) { }

  ngOnInit(): void {
    this.service.listarProductos().subscribe(resp => {
      this.productos = resp;
      // console.log(this.productos);
    });
  }

  listarAlmacenes(){
    this.service.listarAlmacenes().subscribe(resp => {
      this.almacenes = resp;
      // console.log(this.almacenes);
    });
  }

  listarProveedores() {
    this.service.getProveedores().subscribe(resp => {
      this.proveedores = resp;
    });
  }

  editarProducto(index: number) {
    this.editarIndex = index;
    this.productoEditar = this.productos[this.editarIndex];

    this.listarAlmacenes();
    this.listarProveedores();
  }

  editar(nombre, precio, cantidad, descripcion, proveedor, almacen) {
    this.producto.NombreProducto = nombre.value;
    this.producto.PrecioProducto = precio.value;
    this.producto.CantidadProducto = cantidad.value;
    this.producto.Descripcion = descripcion.value;
    this.producto.IdProveedor = proveedor.value;
    this.producto.IdAlmacen = almacen.value;

    this.service.actualizarProducto(this.producto, this.productoEditar._id).subscribe(resp => {
      location.reload();
    });
  }

  eliminarProducto(index: number) {
    this.eliminarIndex = index;
  }

  eliminar() {
    this.service.eliminarProducto(this.productos[this.eliminarIndex]._id).subscribe(resp => {
      location.reload();
    });
  }

}
