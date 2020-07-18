import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {CategoriaModel} from "../../../models/categoria.model";

@Component({
  selector: 'app-categoria-editar',
  templateUrl: './categoria-editar.component.html',
  styles: [
  ]
})
export class CategoriaEditarComponent implements OnInit {

  categorias: any;

  indexEditar: number = null;
  categoriaEditar: any = '';

  indexEliminar: number = null;
  categoriaEliminar: any = '';

  categoria: CategoriaModel = new CategoriaModel();

  constructor( private service: UserService ) { }

  ngOnInit(): void {
    this.service.listarCategorias().subscribe(resp => {
      this.categorias = resp;
    });
  }

  editar(index: number) {
    this.indexEditar = index;
    this.categoriaEditar = this.categorias[this.indexEditar];

  }
  editarCategoria(nombre, descripcion) {
    this.categoria.NombreCategoria = nombre.value;
    this.categoria.Descripcion = descripcion.value;

    this.service.actualizarCategoria(this.categoria, this.categoriaEditar._id).subscribe(resp => {
      this.categorias[this.indexEditar] = resp;
    });
  }

  eliminar(index: number) {
    this.indexEliminar = index;

  }
  eliminarCategoria() {
    this.categoriaEliminar = this.categorias[this.indexEliminar];

    this.service.eliminarCategoria(this.categoriaEliminar._id).subscribe(resp => {
      console.log(resp);

      location.reload();
    });
  }

}
