import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AlmacenModel} from "../../../models/almacen.model";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-almacen-crear',
  templateUrl: './almacen-crear.component.html',
  styles: [
  ]
})
export class AlmacenCrearComponent implements OnInit {

  almacen: AlmacenModel = new AlmacenModel();

  constructor( private service: UserService, private router: Router ) { }

  ngOnInit(): void {
  }

  crearAlmacen(form: NgForm) {
    if (form.invalid) { return ; }

    this.service.registrarAlmacen(this.almacen).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl('/home/almacen-editar')
    });
  }

  cancelar() {
      this.router.navigateByUrl('/home/almacen-editar')
  }

}
