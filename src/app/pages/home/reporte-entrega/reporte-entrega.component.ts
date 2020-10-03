import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reporte-entrega',
  templateUrl: './reporte-entrega.component.html',
  styles: [
  ]
})
export class ReporteEntregaComponent implements OnInit {

  asignaciones: any = '';

  constructor( private service: UserService, private router: Router ) { }

  ngOnInit(): void {
    this.service.listarAsignaciones().subscribe(resp => {
      this.asignaciones = resp;

      console.log(this.asignaciones);
    });
  }

  crearBoleta(index) {
    console.log(index)
    this.service.crearBoleta( this.asignaciones[index]._id ).subscribe(resp => {
      this.router.navigateByUrl('/home/boletaentrega')
      console.log(resp);
      alert( 'boleta' );
    });
  }

}
