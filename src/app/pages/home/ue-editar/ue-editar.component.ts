import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-ue-editar',
  templateUrl: './ue-editar.component.html',
  styles: [
  ]
})
export class UeEditarComponent implements OnInit {

  colegios: any;

  constructor( private service: UserService ) { }

  ngOnInit(): void {
    this.service.listarUnidadesEducativas().subscribe(resp => {
      this.colegios = resp;
      console.log(this.colegios);
    });
  }

}
