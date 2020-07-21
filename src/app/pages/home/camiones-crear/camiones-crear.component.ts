import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {CamionModel} from "../../../models/camion.model";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-camiones-crear',
  templateUrl: './camiones-crear.component.html',
  styles: [
  ]
})
export class CamionesCrearComponent implements OnInit {

  camion: CamionModel = new CamionModel();

  constructor( private service: UserService, private router: Router ) { }

  ngOnInit(): void {
  }

  crearCamion(form: NgForm) {
    if (form.invalid) {
      return ;
    }

    console.log(this.camion);
    this.service.registrarCamion(this.camion).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl('/home/camiones-editar');
    });
  }

}
