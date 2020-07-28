import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-ue-poblacion-beneficiada',
  templateUrl: './ue-poblacion-beneficiada.component.html',
  styles: [
  ]
})
export class UePoblacionBeneficiadaComponent implements OnInit {

  colegios: any = '';

  constructor( private service: UserService ) { }

  ngOnInit(): void {
    this.service.listarUnidadesEducativas().subscribe(resp => {
      this.colegios = resp;

      console.log(this.colegios);
    });
  }

  buscarUnidadesEducativas(query) {
    let q = query.value;

    this.service.buscarUnidadEducativa(q).subscribe(resp => {
      this.colegios = resp;
    });
  }

}
