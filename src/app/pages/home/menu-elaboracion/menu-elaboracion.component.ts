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
      let producto = this.productosTodos[i];
      console.log(producto);

      if ( producto.Solido_Liquido ) { // si es producto solido

        for (let j=0; j < producto.Nivels.length; j++){
          let nivelSolido = producto.Nivels[j];

          if ( nivelSolido.Nivel === 'Inicial' ) {
            // this.productosInicialSolido.push(producto[i]);
            console.log(producto[i]);

          } else if ( nivelSolido.Nivel === 'Primaria' ) {
            // this.productosPrimariaSolido.push(producto[i]);
            console.log(producto[i]);

          } else if ( nivelSolido.Nivel === 'Secundaria' ) {
            // this.productosSecundariaSolido.push(producto[i]);
            console.log(producto[i]);

          }
        }

      } else if ( !producto.Solido_Liquido ){ // si es producto liquido

        for (let x=0; x < producto.Nivels.length; x++){
          let nivelLiquido = producto.Nivels[x];

          if ( nivelLiquido.Nivel === 'Inicial' ) {
            // this.productosInicialLiquido.push(producto[i]);
            console.log(producto[i]);
          } else if ( nivelLiquido.Nivel === 'Primaria' ) {
            // this.productosPrimariaLiquido.push(producto[i]);
            console.log(producto[i]);
          } else if ( nivelLiquido.Nivel === 'Secundaria' ) {
            // this.productosSecundariaLiquido.push(producto[i]);
            console.log(producto[i]);
          }
        }
      }
    }

    // console.log('Inicial solido',this.productosInicialSolido);
    // console.log('Primaria solido',this.productosPrimariaSolido);
    // console.log('Secundaria solido',this.productosSecundariaSolido);
    // console.log('Inicial liquido',this.productosInicialLiquido);
    // console.log('Primaria liquido',this.productosPrimariaLiquido);
    // console.log('Secundaria liquido',this.productosSecundariaLiquido);

  }

  // get(nivel: string, solido_liquido: boolean) {
  //
  //   console.log('entra')
  //
  //   if (nivel === 'Inicial' && solido_liquido === true) {
  //     this.service.getProductosMenu(solido_liquido, nivel).subscribe(resp => {
  //       this.productosInicialSolido = resp;
  //     });
  //   } else if (nivel === 'Inicial' && solido_liquido === false) {
  //     this.service.getProductosMenu(solido_liquido, nivel).subscribe(resp => {
  //       this.productosInicialLiquido = resp;
  //     });
  //   } else if (nivel === 'Primaria' && solido_liquido === true ) {
  //     this.service.getProductosMenu(solido_liquido, nivel).subscribe(resp => {
  //       this.productosPrimariaSolido = resp;
  //     });
  //   } else if (nivel === 'Primaria' && solido_liquido === false ) {
  //     this.service.getProductosMenu(solido_liquido, nivel).subscribe(resp => {
  //       this.productosPrimariaLiquido = resp;
  //     });
  //   } else if (nivel === 'Secundaria' && solido_liquido === true ) {
  //     this.service.getProductosMenu(solido_liquido, nivel).subscribe(resp => {
  //       this.productosSecundariaSolido = resp;
  //     });
  //   } else if (nivel === 'Secundaria' && solido_liquido === false ) {
  //     this.service.getProductosMenu(solido_liquido, nivel).subscribe(resp => {
  //       this.productosSecundariaLiquido = resp;
  //     });
  //   }
  // }

  calculoSolidoInicial(event) {
    this.service.getSolidoInicial(event.target.value).subscribe(resp => {
      this.calculosInicialSolido = resp;

      console.log(this.calculosInicialSolido);
    });
  }

}
