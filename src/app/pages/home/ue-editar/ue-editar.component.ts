import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {UnidadEducativaModel} from "../../../models/unidadEducativa.model";

@Component({
  selector: 'app-ue-editar',
  templateUrl: './ue-editar.component.html',
  styles: [
  ]
})
export class UeEditarComponent implements OnInit {

  colegios: any;
  colegioEditar: any = '';
  colegio: UnidadEducativaModel = new UnidadEducativaModel();
  indexEditado: number = 0;
  indexEliminar: number = 0;
  colegioEliminar: any = '';

  constructor( private service: UserService ) { }

  ngOnInit(): void {
    this.service.listarUnidadesEducativas().subscribe(resp => {
      this.colegios = resp;
      console.log(this.colegios);
    });
  }

  editarIndex(index: number) {
    this.colegioEditar = this.colegios[index];
    this.indexEditado = index;
    // console.log(index)
    // console.log(this.colegioEditar);
  }

  editarColegio( nmc, tur, rut, alumnosInicial, alumnosPrimaria, alumnosSecundaria, encargado, dir, tel ) {

    this.colegio.NombreColegio = nmc.value;
    this.colegio.Turno = tur.value;
    this.colegio.Ruta = rut.value;
    this.colegio.CantidadAlumnosInicial = alumnosInicial.value;
    this.colegio.CantidadAlumnosPrimaria = alumnosPrimaria.value;
    this.colegio.CantidadAlumnosSecundaria = alumnosSecundaria.value;
    this.colegio.Encargado = encargado.value;
    this.colegio.Direccion = dir.value;
    this.colegio.Telefono = tel.value;

    console.log(this.colegio, this.colegioEditar._id);
    this.service.actualizarUnidadEducativa( this.colegio, this.colegioEditar._id ).subscribe( resp => {
      console.log(resp);

      this.colegios[this.indexEditado] = resp;
    });
  }

  eliminar(index: number) {
    this.colegioEliminar = this.colegios[index];
    console.log(this.colegioEliminar);
  }

  eliminarColegio() {
    this.service.eliminarUnidadEducativa( this.colegioEliminar._id ).subscribe(resp => {
      console.log(resp);
      location.reload();
    });
  }

  buscarColegio(query) {
    let qr = query.value;

    this.service.buscarUnidadEducativa(qr).subscribe(resp => {
      this.colegios = resp;
    });
  }

}
