import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {RutaModel} from "../../../models/ruta.model";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crear-ruta',
  templateUrl: './crear-ruta.component.html',
  styles: [
  ]
})
export class CrearRutaComponent implements OnInit {

  ruta: RutaModel = new RutaModel();

  constructor( private service: UserService, private route: Router ) { }

  ngOnInit(): void {
  }

  crearRuta(form: NgForm) {
    if (form.invalid) {
      return ;
    }

    this.service.crearRuta(this.ruta).subscribe(resp => {
      console.log(resp);
      this.route.navigateByUrl('/home/ruta-editar');
    });

  }

}
