import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-calculos-diarios',
  templateUrl: './calculos-diarios.component.html',
  styles: [
  ]
})
export class CalculosDiariosComponent implements OnInit {


  // CodigoProducto: "1111"

  // FrecuenciaInicialInicial: "0.52"
  // FrecuenciaInicialPrimaria: "0.00"
  // FrecuenciaInicialSegundaria: "0.46"

  // FrecuendiaInicialDisponible: "-0.48"
  // FrecuendiaPrimariaDisponible: 0
  // FrecuendiaSegundariaDisponible: "-0.54"

  // NombreProducto: "Manzana"

  // PresupuestoDisponibleInicial: "-2975.50"
  // PresupuestoDisponiblePrimaria: 0
  // PresupuestoDisponibleSegundaria: "-3833.50"

  // PresupuestoInicial: "3245.00"

  // TotalAlumnos: 3994

  // TotalAlumnosInicial: 1131
  // TotalAlumnosPrimaria: 1576
  // TotalAlumnosSegundaria: 1287

  productos: any = '';
  idCalcular: string = '';
  calculoDiario: any = '';

  niveles: any = '';

  constructor( private service: UserService ) { }

  ngOnInit(): void {
    this.service.listarProductosReporte().subscribe(resp => {
      this.productos = resp;
      console.log(this.productos);
    });
  }

  botonCalcular(index) {
    this.idCalcular = this.productos[index]._id;
    this.niveles = this.productos[index].Nivels;

    console.log(this.niveles);

    this.service.calculoDiario(this.idCalcular).subscribe(resp => {
      this.calculoDiario = resp;

      console.log(this.calculoDiario);
    });

  }

}
