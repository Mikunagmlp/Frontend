import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-menu-jefa',
  templateUrl: './menu-jefa.component.html',
  styles: [
  ]
})
export class MenuJefaComponent implements OnInit {

  menu: any = '';
  obj: any = {
    ObservacionEba: this.menu.ObservacionEba,
    ObservacionJefeUnace: 'Sin observaciones',
    AprovadoEba: true,
    Aprovado: false,
    EnviadoJefeUnace: false,

  };

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.listarMenuUnace().subscribe(resp => {
      this.menu = resp[0];

      console.log(this.menu);
    });
  }

  agregarObservaciones(observaciones) {
    this.obj.ObservacionJefeUnace = observaciones.value;
  }

  enviarMenuAprobado() {
    this.obj.Aprovado = true;
    this.obj.EnviadoJefeUnace = true;

    this.service.aprobarMenuUnace(this.menu._id, this.obj).subscribe(resp => {
      console.log(resp);
    });

  }

}
