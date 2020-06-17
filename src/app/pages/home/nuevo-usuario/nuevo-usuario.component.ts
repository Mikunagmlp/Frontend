import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserModel} from "../../../models/user.model";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styles: [
  ]
})
export class NuevoUsuarioComponent implements OnInit {

  usuario: UserModel = new UserModel();

  constructor( private service: UserService, private router: Router ) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    if (form.invalid) { return ; }

    this.service.registrarUsuario( this.usuario ).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl('/home');
    });
  }

}
