import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";

import {UserService} from "../../../services/user.service";
import {UnidadEducativaModel} from "../../../models/unidadEducativa.model";

@Component({
  selector: 'app-ue-crear',
  templateUrl: './ue-crear.component.html',
  styleUrls: []
})
export class UeCrearComponent implements OnInit {

  unidadEducativa: UnidadEducativaModel = new UnidadEducativaModel();

  constructor( private service: UserService, private router: Router ) { }

  ngOnInit(): void {
  }

  crear( form: NgForm ) {
    if ( form.invalid ) { return ; }

    console.log(this.unidadEducativa);

    this.service.crearUnidadEducativa( this.unidadEducativa ).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl('/home/ue-editar');
    });
  }

}
