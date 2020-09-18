import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-reporte-estadistico',
  templateUrl: './reporte-estadistico.component.html',
  styles: [
  ]
})
export class ReporteEstadisticoComponent implements OnInit {

  fechaHoy: Date = new Date();
  datos: any = '';
  datosArray: any = '';

  constructor( private service: UserService ) { }

  ngOnInit(): void {
  }

  buscar(inicio, final) {
    let obj = {
      fechaInicio: inicio.value,
      fechaFin: final.value
    }

    this.service.estadistico(obj).subscribe(resp => {
      this.datos = resp;
      // console.log(this.datos);
      this.datosArray = Object.entries(this.datos);
      // console.log(this.datosArray)
    });
  }

// {asdfasdf: 1, con observaciones: 1}

}
