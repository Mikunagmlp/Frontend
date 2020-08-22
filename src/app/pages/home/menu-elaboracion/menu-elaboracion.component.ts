import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-menu-elaboracion',
  templateUrl: './menu-elaboracion.component.html',
  styles: [
  ]
})
export class MenuElaboracionComponent implements OnInit {

  productosTodos: any = '';
  productos: any = '';


  productosInicialSolido: any[] = [];
  productosInicialLiquido: any[] = [];
  productosPrimariaSolido: any[] = [];
  productosPrimariaLiquido: any[] = [];
  productosSecundariaSolido: any[] = [];
  productosSecundariaLiquido: any[] = [];

  calculosInicialSolido: any = '';
  calculosInicialLiquido: any = '';
  calculosPrimariaSolido: any = '';
  calculosPrimariaLiquido: any = '';
  calculosSecundariaSolido: any = '';
  calculosSecundariaLiquido: any = '';




  constructor( private service: UserService) { }

  ngOnInit(): void {
    this.service.listarProductos().subscribe(resp => {
      this.productosTodos = resp;
      console.log(this.productosTodos);
      this.ordenarPorGrupos();
    });
  }

  ordenarPorGrupos() {

    for ( let i = 0; i < this.productosTodos.length; i++ ){
      this.productos = this.productosTodos[i];
      console.log(this.productos);

      if ( this.productos.Solido_Liquido ) { // si es this.productos solido

        for (let j=0; j < this.productos.Nivels.length; j++){
          let nivelSolido = this.productos.Nivels[j];

          if ( nivelSolido.Nivel === 'Inicial' ) {
            this.productosInicialSolido.push(this.productos);
            // console.log(this.productos);

          } else if ( nivelSolido.Nivel === 'Primaria' ) {
            this.productosPrimariaSolido.push(this.productos);
            // console.log(this.productos);

          } else if ( nivelSolido.Nivel === 'Segundaria' ) {
            this.productosSecundariaSolido.push(this.productos);
            // console.log(this.productos);
          }
        }

      } else if ( !this.productos.Solido_Liquido ){ // si es this.productos liquido

        for (let x=0; x < this.productos.Nivels.length; x++){
          let nivelLiquido = this.productos.Nivels[x];

          if ( nivelLiquido.Nivel === 'Inicial' ) {
            this.productosInicialLiquido.push(this.productos);
            // console.log(this.productos);
          } else if ( nivelLiquido.Nivel === 'Primaria' ) {
            this.productosPrimariaLiquido.push(this.productos);
            // console.log(this.productos);
          } else if ( nivelLiquido.Nivel === 'Segundaria' ) {
            this.productosSecundariaLiquido.push(this.productos);
            // console.log(this.productos);
          }
        }
      }
    }

  }

  calculoSolidoInicial(event) {
    // console.log(event.target.value);
    this.service.getSolidoInicial(event.target.value).subscribe(resp => {
      this.calculosInicialSolido = resp;
      // console.log(this.calculosInicialSolido);
    });
  }


  calculoLiquidoInicial(event){
    // console.log(event.target.value);
    this.service.getLiquidoInicial(event.target.value).subscribe(resp => {
      this.calculosInicialLiquido = resp;
      // console.log(this.calculosInicialLiquido);
    });
  }

  calculoSolidoPrimaria(event){
    // console.log(event.target.value);
    this.service.getSolidoPrimaria(event.target.value).subscribe(resp => {
      this.calculosPrimariaSolido = resp;
      // console.log(this.calculosPrimariaSolido);
    });
  }

  calculoLiquidoPrimaria(event){
    // console.log(event.target.value);
    this.service.getLiquidoPrimaria(event.target.value).subscribe(resp => {
      this.calculosPrimariaLiquido = resp;
      // console.log(this.calculosPrimariaLiquido);
    });
  }

  calculoSolidoSecundaria(event){
    // console.log(event.target.value);
    this.service.getSolidoSecundaria(event.target.value).subscribe(resp => {
      this.calculosSecundariaSolido = resp;
      // console.log(this.calculosSecundariaSolido);
    });
  }


  calculoLiquidoSecundaria(event){
    // console.log(event.target.value);
    this.service.getLiquidoSecundaria(event.target.value).subscribe(resp => {
      this.calculosSecundariaLiquido = resp;
      // console.log(this.calculosSecundariaLiquido);
    });
  }

}
