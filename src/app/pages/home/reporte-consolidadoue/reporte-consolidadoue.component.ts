import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import * as moment from 'moment';
moment.locale('es');

@Component({
  selector: 'app-reporte-consolidadoue',
  templateUrl: './reporte-consolidadoue.component.html',
  styles: [
  ]
})
export class ReporteConsolidadoueComponent implements OnInit {

  fechaHoy: Date = new Date();
  ues: any = '';

  constructor( private service: UserService ) { }

  ngOnInit(): void {
  }

  buscarPorFecha(colegio, fechaInicia, fechaFinal){
    let obj = {
      fechaInicio: fechaInicia.value,
      fechaFin: fechaFinal.value
    }
    this.service.consolidadoUe(colegio.value, obj).subscribe(resp => {
      this.ues = resp;
      console.log(this.ues);
    });
  }

  convertDate(date) {
    return moment(date).format("dddd, MMMM DD YYYY, h:mm:ss a");
  }


}
