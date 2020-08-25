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

  listarMenusEnviadosAEba: any = '';
  listarMenusNoAprobadosJefaUnace: any = '';

  constructor(private service: UserService) { }

  ngOnInit(): void {
    // this.service.listarMenuEbaAprobados().subscribe(resp => {
    //   this.menusAprobados = resp;
    //   console.log(this.menusAprobados);
    // });

    this.service.listarMenuEbaNoAprobados().subscribe(resp => {
      this.listarMenusEnviadosAEba = resp;
      console.log(this.listarMenusEnviadosAEba);
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

    console.log(id);
    this.service.listarMenu(id).subscribe(resp => {
      this.menuEbaNoAprobado = resp;

      console.log(this.menuEbaNoAprobado);
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
