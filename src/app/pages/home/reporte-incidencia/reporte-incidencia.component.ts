import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import * as moment from 'moment';
moment.locale('es');

@Component({
  selector: 'app-reporte-incidencia',
  templateUrl: './reporte-incidencia.component.html',
  styles: [
  ]
})
export class ReporteIncidenciaComponent implements OnInit {

  f: Date = new Date();
  datos: any = '';

  constructor( private service: UserService ) { }

  ngOnInit(): void {
  }

  buscar(inicio, final) {
    let obj = {
      fechaInicio: inicio.value,
      fechaFin: final.value
    }

    this.service.incidencias(obj).subscribe(resp => {
      this.datos = resp;
      console.log(this.datos);
    });
  }

  convertDate(date) {
    return moment(date).format("dddd, MMMM DD YYYY, h:mm a");
  }

}
