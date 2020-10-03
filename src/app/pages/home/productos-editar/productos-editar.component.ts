import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {ProductoModel} from "../../../models/producto.model";

@Component({
  selector: 'app-productos-editar',
  templateUrl: './productos-editar.component.html',
  styles: [
  ]
})
export class ProductosEditarComponent implements OnInit {

  niveles = ['Inicial', 'Primaria', 'Segundaria'];
  nivelesBool = [];
  nivelesEnviar = [];

  productos: any = '';
  productoEditar: any = '';
  editarIndex: number = 0;
  producto: ProductoModel = new ProductoModel();

  almacenes: any = '';
  proveedores: any = '';

  eliminarIndex: number = 0;

  solidLiquid: boolean = null;

  constructor( private service: UserService, private router: Router ) { }

  ngOnInit(): void {
    this.service.listarProductos().subscribe(resp => {
      this.productos = resp;
      // console.log(this.productos);
    });
  }

  listarAlmacenes(){
    this.service.listarAlmacenes().subscribe(resp => {
      this.almacenes = resp;
      // console.log(this.almacenes);
    });
  }

  listarProveedores() {
    this.service.getProveedores().subscribe(resp => {
      this.proveedores = resp;
    });
  }


  nivelesBoolLlenar() {
    for ( let i = 0; i < this.niveles.length; i++ ){
      let ni = this.niveles[i];
      // console.log('Rol: ',ni)
      for (let j = 0; j < this.productoEditar.Nivels.length; j++){
        let rr2 = this.productoEditar.Nivels[j].Nivel;
        // console.log('User rol:',rr2);
        if (ni === rr2) {
          this.nivelesBool[i] = true;
          break;
        } else{
          this.nivelesBool[i] = false;
        }
      }
    }

    console.log(this.nivelesBool);
  }

  editarProducto(index: number) {
    this.editarIndex = index;
    this.productoEditar = this.productos[this.editarIndex];
    this.solidLiquid = this.productoEditar.Solido_Liquido;

    console.log(this.productoEditar);

    this.listarAlmacenes();
    this.listarProveedores();
    this.nivelesBoolLlenar()
  }

  selectNivel(event, index){
    this.nivelesBool[index] = event;
  }

  editar(nombre, descripcion, solido_liquido, proveedor, almacen, lote, volumen, gramage, presInicial, precUnitario) {
    this.producto.NombreProducto = nombre.value;
    this.producto.Descripcion = descripcion.value;
    this.producto.Solido_Liquido = this.solidLiquid;
    this.producto.IdProveedor = proveedor.value;
    this.producto.IdAlmacen = almacen.value;
    this.producto.Lote = lote.value;
    this.producto.Volumen = volumen.value;
    this.producto.Gramage = gramage.value;
    this.producto.PresupuestoInicial = presInicial.value;
    this.producto.PrecioUnitario = precUnitario.value;

    for (let i=0;i<this.nivelesBool.length;i++){
      let niv = this.nivelesBool[i];
      if (niv === true) {
        this.nivelesEnviar.push({
          Nivel: this.niveles[i]
        });
      }
    }

    this.producto.Nivels = this.nivelesEnviar;
    // console.log(this.producto);

    console.log(this.solidLiquid);

    this.service.actualizarProducto(this.producto, this.productoEditar._id).subscribe(resp => {
      location.reload();
    });
  }

  eliminarProducto(index: number) {
    this.eliminarIndex = index;
  }

  eliminar() {
    this.service.eliminarProducto(this.productos[this.eliminarIndex]._id).subscribe(resp => {
      location.reload();
    });
  }

}
