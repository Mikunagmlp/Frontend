import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {AlmacenModel} from "../../../models/almacen.model";

@Component({
  selector: 'app-almacen-editar',
  templateUrl: './almacen-editar.component.html',
  styles: [
  ]
})
export class AlmacenEditarComponent implements OnInit {

  almacenes: any;
  almacenEditar: any = '';
  indexEdiar: any = '';
  almacen: AlmacenModel = new AlmacenModel();

  idAlmacenEliminar: any = '';

  constructor( private service: UserService, private router: Router ) { }

  ngOnInit(): void {
    this.service.listarAlmacenes().subscribe(resp => {
      this.almacenes = resp;
    });
  }

  editar(index: number) {
    this.almacenEditar = this.almacenes[index];
    console.log(this.almacenEditar);
    this.indexEdiar = index;
  }
  editarAlmacen(nombre, desc) {
    this.almacen.NombreAlmacen = nombre.value;
    this.almacen.Descripcion = desc.value;

    this.service.actualizarAlmacen(this.almacen, this.almacenEditar._id ).subscribe(resp => {
      this.almacenes[this.indexEdiar] = resp;
    });
  }

  eliminar(index: number) {
    this.idAlmacenEliminar = this.almacenes[index]._id;
    // console.log(this.idAlmacenEliminar);
  }
  eliminarAlmacen(){
    this.service.eliminarAlmacen(this.idAlmacenEliminar).subscribe(resp => {
      console.log(resp);
      location.reload();
    });
  }

}
