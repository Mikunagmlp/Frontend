import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserModel} from "../../../models/user.model";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {RolModel} from "../../../models/rol.model";

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styles: [
  ]
})
export class NuevoUsuarioComponent implements OnInit {

  usuario: UserModel = new UserModel();
  roles: any;

  constructor( private service: UserService, private router: Router ) { }

  ngOnInit(): void {
    this.service.pedirRoles().subscribe(resp => {
      // console.log(resp);
      this.roles = resp;
    });
  }

  login(form: NgForm) {
    if (form.invalid) { return ; }

    // console.log(this.usuario);

    this.service.registrarUsuario( this.usuario ).subscribe(resp => {
      // console.log(resp);
      this.router.navigateByUrl('/home');
    });
  }

}
