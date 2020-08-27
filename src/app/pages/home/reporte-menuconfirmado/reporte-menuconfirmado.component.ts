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

  // Aprovado: true
  // AprovadoEba: true
  // CodigoLiquidoInicial: "2222"
  // CodigoLiquidoPrimaria: "2222"
  // CodigoLiquidoSegundaria: "2222"
  // CodigoSolidoInicial: "1111"
  // CodigoSolidoPrimaria: "3333"
  // CodigoSolidoSegundaria: "3333"
  // EnviadoEba: true
  // EnviadoJefeUnace: true
  // Estado: true
  // FrecuenciaLiquidaUtilizadoInicial: 1.55
  // FrecuenciaLiquidaUtilizadoPrimaria: 1.11
  // FrecuenciaLiquidaUtilizadoSegundaria: 1.36
  // FrecuenciaSolidoUtilizadoInicial: 1.04
  // FrecuenciaSolidoUtilizadoPrimaria: 11.12
  // FrecuenciaSolidoUtilizadoSegundaria: 13.61
  // MontoLiquidaUtilizadoInicial: 8760
  // MontoLiquidaUtilizadoPrimaria: 8760
  // MontoLiquidaUtilizadoSegundaria: 8760
  // MontoSolildoUtilizadaSegundaria: 8759
  // MontoSolildoUtilizadoInicial: 6490
  // MontoSolildoUtilizadoPrimaria: 8759
  // ProductoLiquidoInicial: "Leche deslactosada"
  // ProductoLiquidoPrimaria: "Leche deslactosada"
  // ProductoLiquidoSegundaria: "Leche deslactosada"
  // ProductoSolidoInicial: "Manzana"
  // ProductoSolidoPrimaria: "Naranja"
  // ProductoSolidoSegundaria: "Naranja"
  // codigoGenerado: 2
  // createdAt: "2020-08-25T16:16:43.950Z"
  // frecuenciaLiquidaInicialInicial: 0
  // frecuenciaLiquidaPrimariaInicial: 0
  // frecuenciaLiquidaSegundariaInicial: 0
  // frecuenciaSolidoInicialInicial: 0
  // frecuenciaSolidoPrimariaInicial: 0
  // frecuenciaSolidoSegundariaInicial: 0
  // montoLiquidaInicial: 0
  // montoLiquidaPrimaria: 0
  // montoLiquidaSegundaria: 0
  // montoSolidoPrimaria: 0
  // montoSolildoInicial: 0
  // montoSolildoSegundaria: 0
  // updatedAt: "2020-08-25T23:20:49.378Z"

  buscarPorFecha(fechaInicio, fechaFinal){
    this.mostrarMenus = true;
    fechaInicio = new Date(fechaInicio.value).toISOString();
    fechaFinal = new Date(fechaFinal.value).toISOString();

    console.log('inicio: ', fechaInicio);
    console.log('final: ', fechaFinal);

    let body = {
      fechaInicio: fechaInicio,
      fechaFin: fechaFinal,

    }

    this.service.menusAprobados(body).subscribe(resp => {
      this.menus = resp;

      console.log(this.menus);
    });

  }

  convertDate(date) {

    return moment(date).format("dddd, MMMM DD YYYY, h:mm:ss a");
  }

}
