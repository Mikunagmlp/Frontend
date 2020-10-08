import { Component, OnInit } from '@angular/core';
import * as html2pdf from 'html2pdf.js';
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
  onExportClick(){
    const options = {
      filename: 'Boleta de Entrega',
      image:{type: 'jpeg'},
      html2canvas: {},
      jsPDF: {orientation:'landscape'}
    };
 
    const content: Element = document.getElementById('reporte-pdf');
 
    html2pdf()
    .from(content)
    .set(options)
    .save();
 
 }
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
