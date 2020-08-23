import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {MenuModel} from "../../../models/menu.model";

@Component({
  selector: 'app-menu-elaboracion',
  templateUrl: './menu-elaboracion.component.html',
  styles: [
  ]
})
export class MenuElaboracionComponent implements OnInit {

  productosTodos: any = '';
  productos: any = '';
  menu: MenuModel = new MenuModel();


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
      console.log(this.calculosInicialSolido);

      this.menu.CodigoSolidoInicial = this.calculosInicialSolido.CodigoSolidoInicial;
      this.menu.FrecuenciaSolidoUtilizadoInicial = this.calculosInicialSolido.FrecuenciaSolidoUtilizadoInicial;
      this.menu.MontoSolildoUtilizadoInicial = this.calculosInicialSolido.MontoSolildoUtilizadoInicial;
      this.menu.ProductoSolidoInicial = this.calculosInicialSolido.ProductoSolidoInicial;
      this.menu.frecuenciaSolidoInicialInicial = this.calculosInicialSolido.frecuenciaSolidoInicialInicial;
      this.menu.montoSolildoInicial = this.calculosInicialSolido.montoSolildoInicial;

    });
  }


  calculoLiquidoInicial(event){
    // console.log(event.target.value);
    this.service.getLiquidoInicial(event.target.value).subscribe(resp => {
      this.calculosInicialLiquido = resp;
      console.log(this.calculosInicialLiquido);

      this.menu.CodigoLiquidoInicial = this.calculosInicialLiquido.CodigoLiquidoInicial;
      this.menu.FrecuenciaLiquidaUtilizadoInicial = this.calculosInicialLiquido.FrecuenciaLiquidaUtilizadoInicial;
      this.menu.MontoLiquidaUtilizadoInicial = this.calculosInicialLiquido.MontoLiquidaUtilizadoInicial;
      this.menu.ProductoLiquidoInicial = this.calculosInicialLiquido.ProductoLiquidoInicial;
      this.menu.frecuenciaLiquidaInicialInicial = this.calculosInicialLiquido.frecuenciaLiquidoInicialInicial;
      this.menu.montoLiquidaInicial = this.calculosInicialLiquido.montoLiquidaInicial;

    });
  }

  calculoSolidoPrimaria(event){
    // console.log(event.target.value);
    this.service.getSolidoPrimaria(event.target.value).subscribe(resp => {
      this.calculosPrimariaSolido = resp;
      console.log(this.calculosPrimariaSolido);

      this.menu.CodigoSolidoPrimaria = this.calculosPrimariaSolido.CodigoSolidoPrimaria;
      this.menu.FrecuenciaSolidoUtilizadoPrimaria = this.calculosPrimariaSolido.FrecuenciaSolidoUtilizadoPrimaria;
      this.menu.MontoSolildoUtilizadoPrimaria = this.calculosPrimariaSolido.MontoSolildoUtilizadoPrimaria;
      this.menu.ProductoSolidoPrimaria = this.calculosPrimariaSolido.ProductoSolidoPrimaria;
      this.menu.frecuenciaSolidoPrimariaInicial = this.calculosPrimariaSolido.frecuenciaSolidoPrimariaInicial;
      this.menu.montoSolildoPrimaria = this.calculosPrimariaSolido.montoSolidoPrimaria;

    });
  }

  calculoLiquidoPrimaria(event){
    // console.log(event.target.value);
    this.service.getLiquidoPrimaria(event.target.value).subscribe(resp => {
      this.calculosPrimariaLiquido = resp;
      console.log(this.calculosPrimariaLiquido);

      this.menu.CodigoLiquidoPrimaria = this.calculosPrimariaLiquido.CodigoLiquidoPrimaria;
      this.menu.FrecuenciaLiquidaUtilizadoPrimaria = this.calculosPrimariaLiquido.FrecuenciaLiquidaUtilizadoPrimaria;
      this.menu.MontoLiquidaUtilizadoPrimaria = this.calculosPrimariaLiquido.MontoLiquidaUtilizadoPrimaria;
      this.menu.ProductoLiquidoPrimaria = this.calculosPrimariaLiquido.ProductoLiquidoPrimaria;
      this.menu.frecuenciaLiquidaPrimariaInicial = this.calculosPrimariaLiquido.frecuenciaLiquidaPrimariaInicial;
      this.menu.montoLiquidaPrimaria = this.calculosPrimariaLiquido.montoLiquidaPrimaria;

    });
  }

  calculoSolidoSecundaria(event){
    // console.log(event.target.value);
    this.service.getSolidoSecundaria(event.target.value).subscribe(resp => {
      this.calculosSecundariaSolido = resp;
      console.log(this.calculosSecundariaSolido);

      this.menu.CodigoSolidoSegundaria = this.calculosSecundariaSolido.CodigoSolidoSegundaria;
      this.menu.FrecuenciaSolidoUtilizadoSegundaria = this.calculosSecundariaSolido.FrecuenciaSolidoUtilizadoSegundaria;
      this.menu.MontoSolildoUtilizadaSegundaria = this.calculosSecundariaSolido.MontoSolildoUtilizadaSegundaria;
      this.menu.ProductoSolidoSegundaria = this.calculosSecundariaSolido.ProductoSolidoSegundaria;
      this.menu.frecuenciaSolidoSegundariaInicial = this.calculosSecundariaSolido.frecuenciaSolidoSegundariaInicial;
      this.menu.montoSolildoSegundaria = this.calculosSecundariaSolido.montoSolildoSegundaria;

    });
  }

  calculoLiquidoSecundaria(event){
    // console.log(event.target.value);
    this.service.getLiquidoSecundaria(event.target.value).subscribe(resp => {
      this.calculosSecundariaLiquido = resp;
      console.log(this.calculosSecundariaLiquido);

      this.menu.CodigoLiquidoSegundaria = this.calculosSecundariaLiquido.CodigoLiquidoSegundaria;
      this.menu.FrecuenciaLiquidaUtilizadoSegundaria = this.calculosSecundariaLiquido.FrecuenciaLiquidaUtilizadoSegundaria;
      this.menu.MontoLiquidaUtilizadoSegundaria = this.calculosSecundariaLiquido.MontoLiquidaUtilizadoSegundaria;
      this.menu.ProductoLiquidoSegundaria = this.calculosSecundariaLiquido.ProductoLiquidoSegundaria;
      this.menu.frecuenciaLiquidaSegundariaInicial = this.calculosSecundariaLiquido.frecuenciaLiquidaSegundariaInicial;
      this.menu.montoLiquidaSegundaria = this.calculosSecundariaLiquido.montoLiquidaSegundaria;

    });
  }

  enviarMenu() {
    console.log(this.menu);
    this.service.createMenu(this.menu).subscribe(resp => {
      console.log(resp);
    });
  }

}
