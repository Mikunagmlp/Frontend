import { Component, OnInit } from '@angular/core';
import {ProductoModel} from "../../../models/producto.model";
import {UserService} from "../../../services/user.service";
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-productos-crear',
  templateUrl: './productos-crear.component.html',
  styles: [
  ]
})
export class ProductosCrearComponent implements OnInit {

  producto: ProductoModel = new ProductoModel();
  proveedores: any = '';
  almacenes: any = '';
  categorias: any = '';

  constructor( private service: UserService, private router: Router ) { }

  ngOnInit(): void {
    this.service.listarCategorias().subscribe(resp =>{
      this.categorias = resp;
    });

    this.service.getProveedores().subscribe(resp => {
      this.proveedores = resp;
      // console.log(this.proveedores)
    });

    this.service.listarAlmacenes().subscribe(resp => {
      this.almacenes = resp;
      // console.log(this.almacenes);
    });
  }

  crearProducto(form: NgForm) {
    if (form.invalid) {return;}

    // console.log(this.producto);
    this.service.registrarProducto(this.producto).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl('/home/productos-editar');
    });
  }

}
