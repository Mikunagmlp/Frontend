import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporte-consolidadoue',
  templateUrl: './reporte-consolidadoue.component.html',
  styles: [
  ]
})
export class ReporteConsolidadoueComponent implements OnInit {

  fechaHoy: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  buscarPorFecha(fechaInicia, fechaFinal){

  }

}
