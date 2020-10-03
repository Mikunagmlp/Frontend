import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-reporte-productosdisp',
  templateUrl: './reporte-productosdisp.component.html',
  styles: [
  ]
})
export class ReporteProductosdispComponent implements OnInit {

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
