import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import * as moment from 'moment';
moment.locale('es');

@Component({
  selector: 'app-boletaentrega',
  templateUrl: './boletaentrega.component.html',
  styles: [
  ]
})
export class BoletaentregaComponent implements OnInit {

  boletas: any = '';
  reporteBoleta: any = '';
  reporteBool: boolean = false;

  urlColegio: any = '';
  urlEba: any = '';
  urlSiremu: any = '';

  constructor( private service: UserService ) { }

  ngOnInit(): void {
    this.service.listarBoletas().subscribe(resp => {
      this.boletas = resp;

      console.log(this.boletas);
    });
  }

  listarBoleta(index) {
    this.reporteBool = true;
    this.reporteBoleta = this.boletas[index];
    this.urlColegio = `http://localhost:3000/firmaColegio/${this.reporteBoleta._id}`;
    this.urlEba = `http://localhost:3000/firmaEba/${this.reporteBoleta._id}`;
    this.urlSiremu = `http://localhost:3000/firmaSiremu/${this.reporteBoleta._id}`;
    // console.log(this.reporteBoleta.FirmaRecibido)
  }

  convertDate(date) {
    return moment(date).format("D/M/YYYY");
  }

}
