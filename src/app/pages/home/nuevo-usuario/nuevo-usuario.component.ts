import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserModel} from "../../../models/user.model";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {RolModel} from "../../../models/rol.model";
import {defaultIfEmpty} from "rxjs/operators";

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styles: [
  ]
})
export class NuevoUsuarioComponent implements OnInit {

  usuario: UserModel = new UserModel();
  roles: any;

  rols: any = [];

  constructor( private service: UserService, private router: Router ) { }

  ngOnInit(): void {
    this.service.pedirRoles().subscribe(resp => {
      // console.log(resp);
      this.roles = resp;
      console.log(this.roles);
    });
  }

  selectRol(event, id, index){
    // console.log(event, id, index);
    if (event) {
      this.rols[index] = {
        IdRol: id
      };

      // this.rols.push({ IdRol: id });

    } else{
      this.rols[index] = defaultIfEmpty();
    }

    console.log(this.rols);
  }


  login(form: NgForm) {
    if (form.invalid) { return ; }

    console.log(this.usuario);
    console.log(this.rols);

    for (let i=0;i<=this.rols.length;i++) {
      if (this.rols === null || this.rols === defaultIfEmpty()) {

      }
    }

    // this.service.registrarUsuario( this.usuario ).subscribe(resp => {
    //   // console.log(resp);
    //   this.router.navigateByUrl('/home');
    // });
  }


}
