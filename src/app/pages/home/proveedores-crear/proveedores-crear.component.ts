import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from "../../../services/user.service";
import {ProveedorModel} from "../../../models/proveedor.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-proveedores-crear',
  templateUrl: './proveedores-crear.component.html',
  styles: [
  ]
})
export class ProveedoresCrearComponent implements OnInit {

  proveedor: ProveedorModel = new ProveedorModel();

  constructor( private service: UserService, private router: Router ) { }

  ngOnInit(): void {
  }

  crear(form: NgForm) {
    if (form.invalid) { return ; }

    console.log(this.proveedor);

    this.service.crearProveedor( this.proveedor ).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl('/home/proveedores-editar');
    });
  }

  cancelar() {
    this.router.navigateByUrl('/home/proveedores-editar');
  }

}
