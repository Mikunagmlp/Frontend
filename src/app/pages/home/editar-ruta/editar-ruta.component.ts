import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {RutaModel} from "../../../models/ruta.model";

@Component({
  selector: 'app-editar-ruta',
  templateUrl: './editar-ruta.component.html',
  styles: [
  ]
})
export class EditarRutaComponent implements OnInit {

  ruta: RutaModel = new RutaModel();

  rutas: any = '';
  eliminarIndex: number = null;
  editarIndex: number = null;
  editarR: any = '';

  constructor( private service: UserService ) { }

  ngOnInit(): void {
    this.service.listarRutas().subscribe(resp => {
      this.rutas = resp;
      console.log(this.rutas);
    });
  }

  eliminar(index: number) {
    this.eliminarIndex = index;
  }

  eliminarRuta() {
    this.service.eliminarRuta(this.rutas[this.eliminarIndex]._id).subscribe(resp => {
      console.log(resp);
      location.reload();
    });
  }

  editar(index: number) {
    this.editarIndex = index;
    this.editarR = this.rutas[this.editarIndex];
  }
  editarRuta(nombre, descripcion){
    this.ruta.NombreRuta = nombre.value;
    this.ruta.Descripcion = descripcion.value;

    console.log(this.ruta);

    this.service.editarRuta(this.rutas[this.editarIndex]._id, this.ruta).subscribe(resp => {
      location.reload();
    });
  }

}
