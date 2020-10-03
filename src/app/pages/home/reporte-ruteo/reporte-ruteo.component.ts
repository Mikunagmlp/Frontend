import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-reporte-ruteo',
  templateUrl: './reporte-ruteo.component.html',
  styles: [
  ]
})
export class ReporteRuteoComponent implements OnInit {

  rutasInicidencia: any = '';
  rutas: any = '';

  constructor( private service: UserService ) { }

  ngOnInit(): void {
    this.service.listarRutas().subscribe(resp => {
      this.rutas = resp;
      console.log(this.rutas);
    });
  }

  buscarRuta(ruta){
    console.log(ruta.target.value);

    this.service.ruteo(ruta.target.value).subscribe(resp => {
      this.rutasInicidencia = resp;
      console.log(this.rutasInicidencia);
    });
  }

}
