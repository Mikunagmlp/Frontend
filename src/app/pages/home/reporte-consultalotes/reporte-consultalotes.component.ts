import { Component, OnInit } from '@angular/core';
import * as html2pdf from 'html2pdf.js';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-reporte-consultalotes',
  templateUrl: './reporte-consultalotes.component.html',
  styles: [
  ]
})
export class ReporteConsultalotesComponent implements OnInit {

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
  lotes: any = '';

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  LoteLiquidoInicial: "L34"
  LoteLiquidoPrimaria: "L23"
  LoteLiquidoSegundaria: "L23"
  LoteSolidoInicial: "L435"
  LoteSolidoPrimaria: "L657"
  LoteSolidoSegundaria: "L3"

  buscarLotes(codigo, fechaInicio, fechaFinal){
    // let obj = {
    //   fechaInico: new Date(fechaInicio.value).toISOString(),
    //   fechaFin: new Date(fechaFinal.value).toISOString()
    // }
    let obj = {
      fechaInicio: fechaInicio.value,
      fechaFin: fechaFinal.value
    }

    console.log(obj)

    this.service.entregaLote(codigo.value.toString(), obj).subscribe(resp => {
      console.log(resp);
      this.lotes = resp;
    });
  }

}
