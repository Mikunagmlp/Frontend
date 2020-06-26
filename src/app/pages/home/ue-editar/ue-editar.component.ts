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

  editarColegio( nmc, rut, dis, cod, tur, cat, cant, tel, dir ) {
    this.colegio.NombreColegio = nmc.value;
    this.colegio.Ruta = rut.value;
    this.colegio.Distrito = dis.value;
    this.colegio.CodColegio = cod.value;
    this.colegio.Turno = tur.value;
    this.colegio.Categoria = cat.value;
    this.colegio.CantidadAlumnos = cant.value;
    this.colegio.Telefono = tel.value;
    this.colegio.Direccion = dir.value;

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

}
