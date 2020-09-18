import { Component, OnInit } from '@angular/core';
import {PhModel} from "../../../models/ph.model";

@Component({
  selector: 'app-verificarph2',
  templateUrl: './verificarph2.component.html',
  styles: [
  ]
})
export class Verificarph2Component implements OnInit {

  ph: PhModel = new PhModel();

  constructor() { }

  ngOnInit(): void {
  }

  registrarPh(f) {

  }

}
