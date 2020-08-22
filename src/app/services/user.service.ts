import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from "../models/user.model";
import { HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import {RolModel} from "../models/rol.model";
import { UnidadEducativaModel } from '../models/unidadEducativa.model';
import {ProveedorModel} from "../models/proveedor.model";
import {AlmacenModel} from "../models/almacen.model";
import {ProductoModel} from "../models/producto.model";
import {CategoriaModel} from "../models/categoria.model";
import {CamionModel} from "../models/camion.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor( private http: HttpClient ) { }

  private url = 'http://localhost:3000';
  private header = new HttpHeaders();



  login( user: UserModel ) {
    return this.http.post( `${this.url}/signin`, user ).pipe(
      map(resp => {
        localStorage.setItem('usuarioEstado', resp['user']['Estado']);
        localStorage.setItem('usuarioID', resp['user']['_id']);
        localStorage.setItem('usuarioNombreCompleto', resp['user']['NombreCompleto']);
        localStorage.setItem('usuarioEmail', resp['user']['Email']);
        localStorage.setItem('usuarioTelefono', resp['user']['Telefono']);
        localStorage.setItem('usuarioDireccion', resp['user']['Direccion']);
        localStorage.setItem('usuarioGenero', resp['user']['Genero']);
        localStorage.setItem('usuarioToken', resp['token']);

        return resp;
      })
    );
  }

  // preguntamos si esta autenticando verificando el token
  estaAutenticado() {
    let token = localStorage.getItem('usuarioToken');

    if (!token) {
      return false;
    }

    return true;
  }

  private userToken = localStorage.getItem('usuarioToken');

  // TODO: USUARIOS
  pedirUsuarios() {
    this.header = this.header.set('x-access-token', this.userToken );

    return this.http.get(`${this.url}/administracion/users`,{ headers: this.header });
  }

  actualizarUsuario( user: UserModel, id: string ) {
    return this.http.patch(`${this.url}/administracion/user/editar/${id}`, user);
  }

  deleteUsuario(id: string) {
    return this.http.put(`${this.url}/administracion/user/eliminar/${id}`,{ Estado: false });
  }

  registrarUsuario(usuario: UserModel) {
    this.header = this.header.set('x-access-token', this.userToken );

    return this.http.post(`${this.url}/administracion/user/registro`, usuario, { headers: this.header });
  }

  buscarUsuario(query) {
    return this.http.get(`${this.url}/administracion/search/user?q=${query}`);
  }

  listarUsuariosEliminados() {
    return this.http.get(`${this.url}/administracion/usersdisabled`);
  }

  habilitarUsuario(id) {
    return this.http.patch(`${this.url}/administracion/user/editar/${id}`, { Estado: true });
  }

  // TODO: ROLES

  pedirRoles() {
    return this.http.get(`${this.url}/roles`);
  }

  // TODO: UNIDADES EDUCATIVAS
  crearUnidadEducativa( ue: UnidadEducativaModel ) {
    return this.http.post( `${this.url}/colegio/registrar`, ue );
  }

  listarUnidadesEducativas() {
    return this.http.get( `${this.url}/colegios?limit=2` );
  }

  actualizarUnidadEducativa( ue: UnidadEducativaModel, id ) {
    return this.http.patch( `${this.url}/colegio/editar/${id}`, ue );
  }

  eliminarUnidadEducativa( id: string) {
    return this.http.patch( `${this.url}/colegio/eliminar/${id}`, { Estado: false } );
  }

  buscarUnidadEducativa(query) {
    return this.http.get(`${this.url}/colegio/search?q=${query}`);
  }

  listarColegiosEliminados() {
    return this.http.get(`${this.url}/colegios/disabled`);
  }

  habilitarColegio(id){
    return this.http.patch(`${this.url}/colegio/editar/${id}`, { Estado: true });
  }

  // TODO: PROVEEDORES
  crearProveedor( proveedor: ProveedorModel ) {
    return this.http.post(`${this.url}/proveedor/registrar`, proveedor);
  }

  getProveedores() {
    return this.http.get(`${this.url}/proveedores`);
  }

  patchProveedor( proveedor: ProveedorModel, id: string ) {
    return this.http.patch(`${this.url}/proveedor/editar/${id}`, proveedor);
  }

  disableProveedor(id: string){
    return this.http.patch(`${this.url}/proveedor/disable/${id}`,{ Estado: false });
  }

  listarProveedoresEliminados(){
    return this.http.get(`${this.url}/proveedores/disabled`);
  }

  habilitarProveedor(id) {
    return this.http.patch(`${this.url}/proveedor/editar/${id}`, { Estado: true });
  }

  // TODO: ALMACENES
  registrarAlmacen( almacen: AlmacenModel ) {
    return this.http.post(`${this.url}/almacen/registrar`, almacen);
  }

  listarAlmacenes() {
    return this.http.get(`${this.url}/almacenes`);
  }

  actualizarAlmacen( almacen: AlmacenModel, id:string ) {
    return this.http.patch(`${this.url}/almacen/editar/${id}`, almacen);
  }

  eliminarAlmacen(id){
    return this.http.patch(`${this.url}/almacen/editar/${id}`, { Estado: false });
  }

  listarAlmacenesEliminados() {
    return this.http.get(`${this.url}/almacenes/disabled`);
  }

  habilitarAlmacen(id){
    return this.http.patch(`${this.url}/almacen/editar/${id}`, { Estado: true });
  }

  // TODO: PRODUCTOS
  registrarProducto( producto: ProductoModel ) {
    return this.http.post(`${this.url}/producto/registrar`, producto);
  }

  listarProductos(){
    return this.http.get(`${this.url}/productos`);
  }

  getProductosMenu(solido_liquido, nivel) {
    return this.http.get(`${this.url}/productos/generarMenu?solido_liquido=${solido_liquido}&nivel=${nivel}`);
  }

  actualizarProducto( nuevoProducto: ProductoModel, id ) {
    return this.http.patch(`${this.url}/producto/editar/${id}`, nuevoProducto);
  }

  eliminarProducto(id) {
    return this.http.patch(`${this.url}/producto/editar/${id}`, { Estado: false });
  }

  listarProductosEliminados() {
    return this.http.get(`${this.url}/productos/disabled`);
  }

  habilitarProducto(id) {
    return this.http.patch(`${this.url}/producto/editar/${id}`, { Estado: true });
  }


  // TODO: CAMIONES
  registrarCamion( camion: CamionModel ){
    return this.http.post(`${this.url}/camion/registrar`, camion);
  }

  listarCamiones(){
    return this.http.get(`${this.url}/camiones`);
  }

  actualizarCamion(camion: CamionModel, id) {
    return this.http.patch(`${this.url}/camion/editar/${id}`, camion);
  }

  eliminarCamion(id) {
    return this.http.patch(`${this.url}/camion/editar/${id}`, {Estado: false});
  }

  listarCamionesEliminados(){
    return this.http.get(`${this.url}/camiones/disabled`);
  }

  habilitarCamion(id) {
    return this.http.patch(`${this.url}/camion/editar/${id}`, {Estado: true});
  }

  // TODO: RECOVER PASSWORD
  resetPassword(email) {
    return this.http.post(`${this.url}/req-reset-password`, { email: email })
  }

  validPassToken(token) {
    return this.http.post(`${this.url}/valid-password-token`, { resettoken: token })
  }

  newPassword(password, token) {
    return this.http.post(`${this.url}/new-password`, { newpass: password, resettoken: token })
  }

  //TODO: MENU
  listarProductosReporte() {
    return this.http.get(`${this.url}/reporte/listadoproductos`);
  }

  calculoDiario(id) {
    return this.http.get(`${this.url}/reporte/calculodiario/${id}`)
  }

  getSolidoInicial(nombre) {
    return this.http.get(`${this.url}/menu/productos/getSolidoInicial?solidoinicial=${nombre}`);
  }

  getLiquidoInicial(nombre) {
    return this.http.get(`${this.url}/menu/productos/getLiquidoInicial?liquidoinicial=${nombre}`);
  }

  getSolidoPrimaria(nombre) {
    return this.http.get(`${this.url}/menu/productos/getSolidoPrimario?solidoprimario=${nombre}`);
  }

  getLiquidoPrimaria(nombre) {
    return this.http.get(`${this.url}/menu/productos/getLiquidoPrimario?liquidoprimaria=${nombre}`);
  }

  getSolidoSecundaria(nombre) {
    return this.http.get(`${this.url}/menu/productos/getSolidoSegundario?solidosegundario=${nombre}`);
  }

  getLiquidoSecundaria(nombre) {
    return this.http.get(`${this.url}/menu/productos/getLiquidoSegundario?liquidosegundario=${nombre}`);
  }

}
