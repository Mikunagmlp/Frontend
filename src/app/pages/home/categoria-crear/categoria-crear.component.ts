import { Component, OnInit } from '@angular/core';
import {CategoriaModel} from "../../../models/categoria.model";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-categoria-crear',
  templateUrl: './categoria-crear.component.html',
  styles: [
  ]
})
export class CategoriaCrearComponent implements OnInit {

  categoria: CategoriaModel = new CategoriaModel();

  constructor( private service: UserService, private router: Router ) { }

  ngOnInit(): void {
  }

  crearCategoria(form: NgForm) {
    if ( form.invalid ) { return; }

    this.service.registrarCategoria(this.categoria).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl('/home/categoria-editar' );
    });
  }

}
