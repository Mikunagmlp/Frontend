import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import { PhModel } from "../../../models/ph.model";

@Component({
  selector: 'app-verificarph',
  templateUrl: './verificarph.component.html',
  styles: [
  ]
})
export class VerificarphComponent implements OnInit {

  ph: PhModel = new PhModel();

  constructor( private service: UserService, private router: Router ) { }

  ngOnInit(): void {
  }

  registrarPh(form: NgForm) {
    if (form.invalid) { return ; }

    this.service.registrarPH(this.ph).subscribe(resp => {

    });

  }

  // cancelar() {
  //     this.router.navigateByUrl('/home/registerph')
  // }

}
