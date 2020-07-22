import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {ProveedorModel} from "../../../models/proveedor.model";

@Component({
  selector: 'app-proveedores-editar',
  templateUrl: './proveedores-editar.component.html',
  styles: [
  ]
})
export class ProveedoresEditarComponent implements OnInit {

  proveedores: any;

  indexEditar: number = 0;
  proveedorEditar: any = '';
  proveedor: ProveedorModel = new ProveedorModel();

  indexEliminar: number = 0;
  proveedorEliminar: any = '';

  constructor( private service: UserService ) { }

  ngOnInit(): void {
    this.service.getProveedores().subscribe(resp => {
      this.proveedores = resp;
      // console.log(this.proveedores)
    });
  }

  editarIndex( index: number ) {
    this.indexEditar = index;
    this.proveedorEditar = this.proveedores[this.indexEditar];

    // console.log(this.indexEditar);
    // console.log(this.proveedorEditar);
  }

  edit(np, c, ne, d, des, pro1, pro2, pro3, pro4, pro5, pro6, pro7, pro8, pro9, pro10) {
    this.proveedor.NombreProveedor = np.value;
    this.proveedor.CodigoProveedor = c.value;
    this.proveedor.NombreEmpresa = ne.value;
    this.proveedor.Direccion = d.value;
    this.proveedor.Descripcion = des.value;
    this.proveedor.pro1 = pro1.value;
    this.proveedor.pro2 = pro2.value;
    this.proveedor.pro3 = pro3.value;
    this.proveedor.pro4 = pro4.value;
    this.proveedor.pro5 = pro5.value;
    this.proveedor.pro6 = pro6.value;
    this.proveedor.pro7 = pro7.value;
    this.proveedor.pro8 = pro8.value;
    this.proveedor.pro9 = pro9.value;
    this.proveedor.pro10 = pro10.value;

    this.service.patchProveedor(this.proveedor, this.proveedorEditar._id).subscribe(resp => {
      this.proveedores[this.indexEditar] = resp;
    });
  }

  eliminarIndex(index: number) {
    this.indexEliminar = index;
    this.proveedorEliminar = this.proveedores[this.indexEliminar];
    // console.log(this.proveedorEliminar);
  }

  eliminar() {
    this.service.disableProveedor( this.proveedorEliminar._id ).subscribe(resp => {
      // console.log(resp);
      location.reload();
    });
  }

}
