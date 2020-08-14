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

  niveles: any = ['Inicial', 'Primaria', 'Secundaria'];
  nivelesBool: any = [];

  producto: ProductoModel = new ProductoModel();
  proveedores: any = '';
  almacenes: any = '';
  solido: boolean = true;
  liquido: boolean = false;

  constructor( private service: UserService, private router: Router ) { }

  ngOnInit(): void {

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

    for (let i=0; i<=this.nivelesBool.length; i++) {
      // console.log(  `${i}:` , this.nivelesBool[i] );
      if ( this.nivelesBool[i] === undefined || this.nivelesBool[i] === null ) {
        this.nivelesBool.splice(i,1)
      }
    }

    for (let i=0; i<=this.nivelesBool.length; i++) {
      // console.log(  `${i}:` , this.nivelesBool[i] );
      if ( this.nivelesBool[i] === undefined || this.nivelesBool[i] === null ) {
        this.nivelesBool.splice(i,1)
      }
    }

    this.producto.Nivels = this.nivelesBool;

    // console.log(this.producto);
    this.service.registrarProducto(this.producto).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl('/home/productos-editar');
    });

    // console.log(this.nivelesBool);
  }

  selectNivel(event, index) {
    // console.log(event, index);

    if (event) {
      this.nivelesBool[index] = {
        Nivel: this.niveles[index]
      }
    } else{
      this.nivelesBool[index] = null;
    }
  }

}
