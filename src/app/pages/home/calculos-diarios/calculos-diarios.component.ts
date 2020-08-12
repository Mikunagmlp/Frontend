import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-calculos-diarios',
  templateUrl: './calculos-diarios.component.html',
  styles: [
  ]
})
export class CalculosDiariosComponent implements OnInit {


  // FrecuenciaInicialInicial: "0.00"
  // FrecuenciaInicialPrimaria: "0.75"
  // FrecuenciaInicialSegundaria: "0.00"
  // PresupuestoInicial: "6490.00"
  // TotalAlumnos: 3994
  // TotalAlumnosInicial: 1131
  // TotalAlumnosPrimaria: 1576
  // TotalAlumnosSegundaria: 1287

  productos: any = '';
  idCalcular: string = '';
  calculoDiario: any = '';

  constructor( private service: UserService ) { }

  ngOnInit(): void {
    this.service.listarProductosReporte().subscribe(resp => {
      this.productos = resp;
      console.log(this.productos);
    });
  }

  botonCalcular(index) {
    this.idCalcular = this.productos[index]._id;

    this.service.calculoDiario(this.idCalcular).subscribe(resp => {
      this.calculoDiario = resp;

      console.log(this.calculoDiario);
    });

  }

}
