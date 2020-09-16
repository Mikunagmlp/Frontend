import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import {RegisterphModel} from "../../../models/re";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-verificarph',
  templateUrl: './verificarph.component.html',
  styles: [
  ]
})
export class VerificarphComponent implements OnInit {

  // verificarph: RegisterphModel = new RegisterphModel();

  constructor( private service: UserService, private router: Router ) { }

  ngOnInit(): void {
  }

  // registrarPh(form: NgForm) {
  //   if (form.invalid) { return ; }
  //
  //   this.service.registrarPh(this.verificarph).subscribe(resp => {
  //     // console.log(resp);
  //     this.router.navigateByUrl('/home/registroph-registrar')
  //   });
  // }

  // cancelar() {
  //     this.router.navigateByUrl('/home/registerph')
  // }

}
