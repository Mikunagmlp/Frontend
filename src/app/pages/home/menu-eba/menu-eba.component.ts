import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import * as moment from 'moment';
moment.locale('es');

@Component({
  selector: 'app-menu-eba',
  templateUrl: './menu-eba.component.html',
  styles: [
  ]
})
export class MenuEbaComponent implements OnInit {

  menuEbaAprobado: any = '';
  menuEbaNoAprobado: any = '';

  menuAprobado: boolean = false;
  menuNoAprobado: boolean = false;

  listarMenusNoAprobados: any = '';
  listarMenusAprobadosPorEBA: any = '';

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.listarMenuEbaAprobados().subscribe(resp => {
      this.listarMenusAprobadosPorEBA = resp;
    });

    this.service.listarMenuEbaNoAprobados().subscribe(resp => {
      this.listarMenusNoAprobados = resp;
      // console.log(this.listarMenusNoAprobados);
    });
  }

  enviarMenuConObservaciones( observaciones ) {
    console.log(observaciones.value);
    let obj = {
      EnviadoEba: false,
      AprovadoEba: false,
      ObservacionEba: observaciones.value,
    }

    this.service.aprobarMenuEBA(this.menuEbaNoAprobado._id, obj).subscribe(resp => {
      console.log(resp);
      location.reload();
    });

  }

  convertDate(date) {
    return moment(date).format("dddd, MMMM DD YYYY, h:mm:ss a");
  }

  listarMenuNoAprobado(id, menuNoAprobado, menuAprobado) {

    this.menuNoAprobado = menuNoAprobado;
    this.menuAprobado = menuAprobado;

    // console.log(id);
    this.service.listarMenu(id).subscribe(resp => {
      this.menuEbaNoAprobado = resp;

      console.log(this.menuEbaNoAprobado);
    });
  }

  listarMenuAprobado(id, menuNoAprobado, menuAprobado) {
    this.menuNoAprobado = menuNoAprobado;
    this.menuAprobado = menuAprobado;

    this.service.listarMenu(id).subscribe(resp => {
      this.menuEbaAprobado = resp;

      console.log(this.menuEbaAprobado);
    });
  }

  aprobarMenuEBA(id) {
    let obj = {
      AprovadoEba: true,
      EnviadoJefeUnace: true
    }

    this.service.aprobarMenuEBA(id, obj).subscribe(resp => {
      location.reload();
    });
  }

}
