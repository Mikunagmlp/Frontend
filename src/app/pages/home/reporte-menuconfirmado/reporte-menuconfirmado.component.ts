import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";

import * as moment from 'moment';
moment.locale('es');

@Component({
  selector: 'app-reporte-menuconfirmado',
  templateUrl: './reporte-menuconfirmado.component.html',
  styles: [
  ]
})
export class ReporteMenuconfirmadoComponent implements OnInit {

  fechaHoy: Date = new Date();
  mostrarMenus: boolean = false;

  menus: any = '';

  constructor( private service: UserService ) { }

  ngOnInit(): void {
  }

  buscarPorFecha(fechaInicio, fechaFinal){
    this.mostrarMenus = true;
    fechaInicio = fechaInicio.value;
    fechaFinal = fechaFinal.value;

    console.log('inicio: ', fechaInicio);
    console.log('final: ', fechaFinal);

    let body = {
      fechaInicio: fechaInicio,
      fechaFin: fechaFinal,
    }

    console.log(body)

    this.service.menusAprobados(body).subscribe(resp => {
      this.menus = resp;

      console.log(this.menus);
    });

  }

  convertDate(date) {

    return moment(date).format("dddd, MMMM DD YYYY, h:mm:ss a");
  }

}
