import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import * as html2pdf from 'html2pdf.js';


@Component({
  selector: 'app-reporte-consolidadoprep',
  templateUrl: './reporte-consolidadoprep.component.html',
  styles: [
  ]
})
export class ReporteConsolidadoprepComponent implements OnInit {

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
  fecha: Date = new Date();
  datos: any = '';

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  buscar(inicio, final) {
    let obj = {
      fechaInicio: inicio.value,
      fechaFin: final.value
    }

    this.service.consolidadoProducto(obj).subscribe(resp => {
      this.datos = resp;
      console.log(this.datos);
    });
  }

}
