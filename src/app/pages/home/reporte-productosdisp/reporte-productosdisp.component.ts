import { Component, OnInit } from '@angular/core';
import * as html2pdf from 'html2pdf.js';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-reporte-productosdisp',
  templateUrl: './reporte-productosdisp.component.html',
  styles: [
  ]
})
export class ReporteProductosdispComponent implements OnInit {
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
  productos: any = '';

  constructor( private service: UserService ) { }

  ngOnInit(): void {
  }

  buscar(inicio, final){
    let obj = {
      fechaInicio: inicio.value,
      fechaFin: final.value
    }

    this.service.productosDisponibles(obj).subscribe(resp => {
      this.productos = resp;

      console.log(this.productos);
    });
  }

}
