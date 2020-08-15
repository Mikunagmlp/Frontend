import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-menu-elaboracion',
  templateUrl: './menu-elaboracion.component.html',
  styles: [
  ]
})
export class MenuElaboracionComponent implements OnInit {

  productos: any = '';

  constructor( private service: UserService) { }

  ngOnInit(): void {
    this.service.listarProductosReporte().subscribe(resp => {
      this.productos = resp;
      console.log(this.productos);
    });
  }

}
