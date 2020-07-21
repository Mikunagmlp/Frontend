import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {CamionModel} from "../../../models/camion.model";

@Component({
  selector: 'app-camiones-editar',
  templateUrl: './camiones-editar.component.html',
  styles: [
  ]
})
export class CamionesEditarComponent implements OnInit {

  camion: CamionModel = new CamionModel();
  camiones: any = '';
  indexEditar: number = null;
  camionEditar: any = '';

  indexEliminar: number = null;
  camionEliminar: any = '';

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.listarCamiones().subscribe(resp => {
      this.camiones = resp;

      console.log(this.camiones);
    });
  }

  editar(index: number){
    this.indexEditar = index;
    this.camionEditar = this.camiones[this.indexEditar];

    console.log(this.camionEditar);
  }

  editarCamion(conductor, ruta, placa, modelo) {
    this.camion.NombreConductor = conductor.value;
    this.camion.Ruta = ruta.value;
    this.camion.NumeroPlaca = placa.value;
    this.camion.Modelo = modelo.value;

    // console.log(this.camion);
    this.service.actualizarCamion(this.camion, this.camionEditar._id).subscribe(resp =>{
      this.camiones[this.indexEditar] = resp;
    });
  }

  eliminar(i) {
    this.indexEliminar = i;
    this.camionEliminar = this.camiones[this.indexEliminar];
  }
  eliminarCamion() {
    this.service.eliminarCamion(this.camionEliminar._id).subscribe(resp => {
      location.reload();
    });
  }

}
