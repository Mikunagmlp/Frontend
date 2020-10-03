import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {AsignacionModel} from "../../../models/asignacion.model";

@Component({
  selector: 'app-proveedores-asignacionlotes',
  templateUrl: './proveedores-asignacionlotes.component.html',
  styles: [
  ]
})
export class ProveedoresAsignacionlotesComponent implements OnInit {

  asignacion: AsignacionModel = new AsignacionModel();
  idColegio: string = '';
  nombreColegio: string = '';

  colegios: any = '';
  menusAprobados: any = '';
  proveedores: any = '';
  indexMenu: number = null;
  menuElegido: any = '';

  constructor( private service: UserService ) { }

  ngOnInit(): void {
    this.service.listarUnidadesEducativas().subscribe(resp => {
      this.colegios = resp;
      console.log(this.colegios);
    });

    this.service.listarMenuUnaceAprobados().subscribe(resp => {
      this.menusAprobados = resp;
      console.log(this.menusAprobados);
    });

    this.service.getProveedores().subscribe(resp => {
      this.proveedores = resp;
      console.log(this.proveedores);
    });
  }

  elegirColegio(nombre, id){
    console.log(nombre, id);
    this.idColegio = id;
    this.nombreColegio = nombre;
  }

  elegirMenu(event) {
    this.indexMenu = event.value;
    this.menuElegido = this.menusAprobados[this.indexMenu];
    this.asignacion.IdMenu = this.menusAprobados[this.indexMenu]._id;
  }

  proveedorInicialSolido(event) {
    console.log(event.value);
    let id = {
      IdProveedor: this.proveedores[event.value]._id
    }
    this.asignacion.SolidoInicial.push(id);

    console.log(this.asignacion);
  }
  proveedorInicialLiquido(event) {
    console.log(event.value);
    let id = {
      IdProveedor: this.proveedores[event.value]._id
    }
    this.asignacion.LiquidoInicial.push(id);
  }
  proveedorPrimariaSolido(event) {
    console.log(event.value);
    let id = {
      IdProveedor: this.proveedores[event.value]._id
    }
    this.asignacion.SolidoPrimaria.push(id);
  }
  proveedorPrimariaLiquido(event) {
    console.log(event.value);
    let id = {
      IdProveedor: this.proveedores[event.value]._id
    }
    this.asignacion.LiquidoPrimaria.push(id);
  }
  proveedorSecundariaSolido(event) {
    console.log(event.value);
    let id = {
      IdProveedor: this.proveedores[event.value]._id
    }
    this.asignacion.SolidoSegundaria.push(id);
  }
  proveedorSecundariaLiquido(event) {
    console.log(event.value);
    let id = {
      IdProveedor: this.proveedores[event.value]._id
    }
    this.asignacion.LiquidoSegundaria.push(id);
  }

  enviarAsignacion(lotesolidoinicial, loteliquidoinicial, lotesolidoprimaria, loteliquidoprimaria, lotesolidosecundaria, loteliquidosecundaria) {
    this.asignacion.LoteSolidoInicial = lotesolidoinicial.value;
    this.asignacion.LoteLiquidoInicial = loteliquidoinicial.value;
    this.asignacion.LoteSolidoPrimaria = lotesolidoprimaria.value;
    this.asignacion.LoteLiquidoPrimaria = loteliquidoprimaria.value;
    this.asignacion.LoteSolidoSegundaria = lotesolidosecundaria.value;
    this.asignacion.LoteLiquidoSegundaria = loteliquidosecundaria.value;

    this.service.crearAsignacion(this.asignacion, this.idColegio).subscribe(resp => {
      console.log(resp);
    });

  }


}

// Aprovado: true
// AprovadoEba: true
// CodigoLiquidoInicial: "2222"
// CodigoLiquidoPrimaria: "2222"
// CodigoLiquidoSegundaria: "2222"
// CodigoSolidoInicial: "1111"
// CodigoSolidoPrimaria: "3333"
// CodigoSolidoSegundaria: "3333"
// EnviadoEba: true
// EnviadoJefeUnace: true
// Estado: true
// FrecuenciaLiquidaUtilizadoInicial: 1.55
// FrecuenciaLiquidaUtilizadoPrimaria: 1.11
// FrecuenciaLiquidaUtilizadoSegundaria: 1.36
// FrecuenciaSolidoUtilizadoInicial: 1.04
// FrecuenciaSolidoUtilizadoPrimaria: 11.12
// FrecuenciaSolidoUtilizadoSegundaria: 13.61
// MontoLiquidaUtilizadoInicial: 8760
// MontoLiquidaUtilizadoPrimaria: 8760
// MontoLiquidaUtilizadoSegundaria: 8760
// MontoSolildoUtilizadaSegundaria: 8759
// MontoSolildoUtilizadoInicial: 6490
// MontoSolildoUtilizadoPrimaria: 8759
// ProductoLiquidoInicial: "Leche deslactosada"
// ProductoLiquidoPrimaria: "Leche deslactosada"
// ProductoLiquidoSegundaria: "Leche deslactosada"
// ProductoSolidoInicial: "Manzana"
// ProductoSolidoPrimaria: "Naranja"
// ProductoSolidoSegundaria: "Naranja"
// codigoGenerado: 2
// createdAt: "2020-08-25T16:16:43.950Z"
// frecuenciaLiquidaInicialInicial: 0
// frecuenciaLiquidaPrimariaInicial: 0
// frecuenciaLiquidaSegundariaInicial: 0
// frecuenciaSolidoInicialInicial: 0
// frecuenciaSolidoPrimariaInicial: 0
// frecuenciaSolidoSegundariaInicial: 0
// montoLiquidaInicial: 0
// montoLiquidaPrimaria: 0
// montoLiquidaSegundaria: 0
// montoSolidoPrimaria: 0
// montoSolildoInicial: 0
// montoSolildoSegundaria: 0
// updatedAt: "2020-08-25T23:20:49.378Z"
// __v: 0
// _id: "5f45396b44bbbd064750a4bb"
