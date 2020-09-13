import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-proveedores-asignacionlotes',
  templateUrl: './proveedores-asignacionlotes.component.html',
  styles: [
  ]
})
export class ProveedoresAsignacionlotesComponent implements OnInit {

  colegios: any = '';
  menusAprobados: any = '';

  constructor( private service: UserService ) { }

  ngOnInit(): void {
    this.service.listarUnidadesEducativas().subscribe(resp => {
      this.colegios = resp;
      console.log(this.colegios);
    });

    this.service.listarMenuUnaceAprobados().subscribe(resp => {
      this.menusAprobados = resp;
      console.log(this.menusAprobados);
    });
  }

}
