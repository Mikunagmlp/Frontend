import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-calculos-diarios',
  templateUrl: './calculos-diarios.component.html',
  styles: [
  ]
})
export class CalculosDiariosComponent implements OnInit {


  // FrecuenciaInicialInicial: "Infinity"
  // FrecuenciaInicialPrimaria: "0.00"
  // FrecuenciaInicialSegundaria: "0.00"
  // PresupuestoInicial: "8760.00"
  // TotalAlumnos: 0
  // TotalAlumnosInicial: 0
  // TotalAlumnosPrimaria: 0
  // TotalAlumnosSegundaria: 0

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
