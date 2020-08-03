import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-categorias-eliminados',
  templateUrl: './categorias-eliminados.component.html',
  styles: [
  ]
})
export class CategoriasEliminadosComponent implements OnInit {

  categoriasEliminadas: any = '';
  indexHabilitar: number = null;
  categoriaHabilitar: any = '';

  constructor( private service: UserService ) { }

  ngOnInit(): void {
    this.service.listarCategoriasEliminadas().subscribe(resp => {
      this.categoriasEliminadas = resp;

    });
  }

  botonHabilitar(index) {
    this.indexHabilitar = index;
    this.categoriaHabilitar = this.categoriasEliminadas[this.indexHabilitar];
    console.log(this.categoriaHabilitar);
  }

  habilitar() {
    this.service.habilitarCategoria(this.categoriaHabilitar._id).subscribe(resp => {
      location.reload();
    });
  }

}
