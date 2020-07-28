import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {UnidadEducativaModel} from "../../../models/unidadEducativa.model";

@Component({
  selector: 'app-ue-poblacion-beneficiada',
  templateUrl: './ue-poblacion-beneficiada.component.html',
  styles: [
  ]
})
export class UePoblacionBeneficiadaComponent implements OnInit {

  colegios: any = '';
  indexEditar: number = 0;
  col: UnidadEducativaModel = new UnidadEducativaModel();

  constructor( private service: UserService ) { }

  ngOnInit(): void {
    this.service.listarUnidadesEducativas().subscribe(resp => {
      this.colegios = resp;

      console.log(this.colegios);
    });
  }

  buscarUnidadesEducativas(query) {
    let q = query.value;

    this.service.buscarUnidadEducativa(q).subscribe(resp => {
      this.colegios = resp;
    });
  }

  actualizar(inicial, primaria, secundaria, index) {
    this.indexEditar = index;
    let c = this.colegios[this.indexEditar];

    this.col.NombreColegio = c.NombreColegio;
    this.col.Ruta = c.Ruta;
    this.col.Distrito = c.Distrito;
    this.col.CodColegio = c.CodColegio;
    this.col.Turno = c.Turno;
    this.col.Categoria = c.Categoria;
    this.col.Telefono = c.Telefono;
    this.col.Direccion = c.Direccion;
    this.col.Encargado = c.Encargado;
    this.col.CantidadAlumnosInicial = inicial.value;
    this.col.CantidadAlumnosPrimaria = primaria.value;
    this.col.CantidadAlumnosSecundaria = secundaria.value;

    this.service.actualizarUnidadEducativa(this.col, c._id).subscribe(resp => {
      this.colegios[this.indexEditar] = resp;
    });

  }

}
