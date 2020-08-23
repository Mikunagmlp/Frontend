import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-menu-eba',
  templateUrl: './menu-eba.component.html',
  styles: [
  ]
})
export class MenuEbaComponent implements OnInit {

  menu: any = '';

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.listarMenuEba().subscribe(resp => {
      this.menu = resp[0];

      console.log(this.menu);
    });
  }

  enviarMenu( observaciones ) {
    console.log(observaciones.value);
    let obj = {
      AprovadoEba: true,
      EnviadoEba: true,
      ObservacionEba: observaciones.value,
      EnviadoJefeUnace: true
    }

    this.service.aprobarMenuEBA(this.menu._id, obj).subscribe(resp => {
      console.log(resp);
      location.reload();
    });
  }
}
