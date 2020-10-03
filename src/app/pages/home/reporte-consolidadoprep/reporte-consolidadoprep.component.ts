import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-reporte-consolidadoprep',
  templateUrl: './reporte-consolidadoprep.component.html',
  styles: [
  ]
})
export class ReporteConsolidadoprepComponent implements OnInit {

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
