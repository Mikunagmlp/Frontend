import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import * as moment from 'moment';
moment.locale('es');

@Component({
  selector: 'app-menu-jefa',
  templateUrl: './menu-jefa.component.html',
  styles: [
  ]
})
export class MenuJefaComponent implements OnInit {

  listaMenusAprobadosCard:boolean = false;
  listaMenusNoAprobadosCard:boolean = false;

  menusAprobados: any = '';
  menusNoAprobados: any = '';

  menuAprobado: any = '';
  menuNoAprobado: any = '';



  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.listarMenuUnaceAprobados().subscribe(resp => {
      this.menusAprobados = resp;
    });

    this.service.listarMenuUnaceNoAprobados().subscribe(resp => {
      this.menusNoAprobados = resp;
    });
  }

  convertDate(date) {
    return moment(date).format("dddd, MMMM DD YYYY, h:mm:ss a");
  }

  listarMenuAprobado(id, menuNoAprobado, menuAprobado) {

    this.listaMenusAprobadosCard = menuAprobado;
    this.listaMenusNoAprobadosCard = menuNoAprobado;

    this.service.listarMenu(id).subscribe(resp => {
      this.menuAprobado =  resp;
    });

  }

  listarMenuNoAprobado(id, menuNoAprobado, menuAprobado) {

    this.listaMenusAprobadosCard = menuAprobado;
    this.listaMenusNoAprobadosCard = menuNoAprobado;

    this.service.listarMenu(id).subscribe(resp => {
      this.menuNoAprobado =  resp;
      console.log(this.menuNoAprobado);
    });

  }

  enviarMenuAprobado() {
    let obj = {
      Aprovado: true
    }

    this.service.aprobarMenuUnace(this.menuNoAprobado._id, obj).subscribe(resp => {
      location.reload();
    });

  }

  agregarObservaciones(observaciones) {
    // this.obj.ObservacionJefeUnace = observaciones.value;
    let obj = {
      EnviadoJefeUnace: false,
      AprovadoEba: false,
      ObservacionJefeUnace: observaciones.value
    }


    this.service.aprobarMenuUnace(this.menuNoAprobado._id, obj).subscribe(resp => {
      location.reload();
    });
  }

}
