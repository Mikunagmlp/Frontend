import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-reporte-consolidadoglob',
  templateUrl: './reporte-consolidadoglob.component.html',
  styles: [
  ]
})
export class ReporteConsolidadoglobComponent implements OnInit {

  fechaHoy: Date = new Date();
  datos: any = '';

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  buscar(inicio, final) {
    let obj = {
      fechaInicio: inicio.value,
      fechaFin: final.value
    }

    this.service.consolidadoGlobal(obj).subscribe(resp => {
      this.datos = resp;
      console.log(this.datos);
    });
  }


}
