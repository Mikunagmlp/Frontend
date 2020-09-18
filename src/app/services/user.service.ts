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
import {MenuModel} from "../models/menu.model";
import {RutaModel} from "../models/ruta.model";
import {PhModel} from "../models/ph.model";
import {AsignacionModel} from "../models/asignacion.model";
import {observable} from "rxjs";

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
    this.header = this.header.set('x-access-token', this.userToken );

    return this.http.patch(`${this.url}/administracion/user/editar/${id}`, user, { headers: this.header });
  }

  deleteUsuario(id: string) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.put(`${this.url}/administracion/user/eliminar/${id}`,{ Estado: false }, { headers: this.header });
  }

  registrarUsuario(usuario: UserModel) {
    this.header = this.header.set('x-access-token', this.userToken );

    return this.http.post(`${this.url}/administracion/user/registro`, usuario, { headers: this.header });
  }

  buscarUsuario(query) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/administracion/search/user?q=${query}`, { headers: this.header });
  }

  listarUsuariosEliminados() {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/administracion/usersdisabled`, { headers: this.header });
  }

  habilitarUsuario(id) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.patch(`${this.url}/administracion/user/editar/${id}`, { Estado: true }, { headers: this.header });
  }

  // TODO: ROLES

  pedirRoles() {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/roles`, { headers: this.header });
  }

  // TODO: UNIDADES EDUCATIVAS
  crearUnidadEducativa( ue: UnidadEducativaModel ) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.post( `${this.url}/colegio/registrar`, ue , { headers: this.header });
  }

  listarUnidadesEducativas() {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get( `${this.url}/colegios`, { headers: this.header } );
  }

  actualizarUnidadEducativa( ue: UnidadEducativaModel, id ) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.patch( `${this.url}/colegio/editar/${id}`, ue, { headers: this.header } );
  }

  eliminarUnidadEducativa( id: string) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.patch( `${this.url}/colegio/eliminar/${id}`, { Estado: false }, { headers: this.header } );
  }

  buscarUnidadEducativa(query) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/colegio/search?q=${query}`, { headers: this.header });
  }

  listarColegiosEliminados() {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/colegios/disabled`, { headers: this.header });
  }

  habilitarColegio(id){
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.patch(`${this.url}/colegio/editar/${id}`, { Estado: true }, { headers: this.header });
  }

  // TODO: PROVEEDORES
  crearProveedor( proveedor: ProveedorModel ) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.post(`${this.url}/proveedor/registrar`, proveedor, { headers: this.header });
  }

  getProveedores() {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/proveedores`, { headers: this.header });
  }

  patchProveedor( proveedor: ProveedorModel, id: string ) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.patch(`${this.url}/proveedor/editar/${id}`, proveedor, { headers: this.header });
  }

  disableProveedor(id: string){
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.patch(`${this.url}/proveedor/disable/${id}`,{ Estado: false }, { headers: this.header });
  }

  listarProveedoresEliminados(){
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/proveedores/disabled`, { headers: this.header });
  }

  habilitarProveedor(id) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.patch(`${this.url}/proveedor/editar/${id}`, { Estado: true }, { headers: this.header });
  }

  crearAsignacion(body: AsignacionModel, id) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.post(`${this.url}/menu/asignacion/registrar/${id}`, body, { headers: this.header });
  }

  listarAsignaciones() {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/listar/asignaciones`, { headers: this.header });
  }

  // TODO: ALMACENES
  registrarAlmacen( almacen: AlmacenModel ) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.post(`${this.url}/almacen/registrar`, almacen, { headers: this.header });
  }

  listarAlmacenes() {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/almacenes`, { headers: this.header });
  }

  actualizarAlmacen( almacen: AlmacenModel, id:string ) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.patch(`${this.url}/almacen/editar/${id}`, almacen, { headers: this.header });
  }

  eliminarAlmacen(id){
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.patch(`${this.url}/almacen/editar/${id}`, { Estado: false }, { headers: this.header });
  }

  listarAlmacenesEliminados() {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/almacenes/disabled`, { headers: this.header });
  }

  habilitarAlmacen(id){
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.patch(`${this.url}/almacen/editar/${id}`, { Estado: true }, { headers: this.header });
  }

  // TODO: PRODUCTOS
  registrarProducto( producto: ProductoModel ) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.post(`${this.url}/producto/registrar`, producto, { headers: this.header });
  }

  listarProductos(){
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/productos`, { headers: this.header });
  }

  getProductosMenu(solido_liquido, nivel) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/productos/generarMenu?solido_liquido=${solido_liquido}&nivel=${nivel}`, { headers: this.header });
  }

  actualizarProducto( nuevoProducto: ProductoModel, id ) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.patch(`${this.url}/producto/editar/${id}`, nuevoProducto, { headers: this.header });
  }

  eliminarProducto(id) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.patch(`${this.url}/producto/editar/${id}`, { Estado: false }, { headers: this.header });
  }

  listarProductosEliminados() {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/productos/disabled`, { headers: this.header });
  }

  habilitarProducto(id) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.patch(`${this.url}/producto/editar/${id}`, { Estado: true }, { headers: this.header });
  }


  // TODO: CAMIONES
  registrarCamion( camion: CamionModel ){
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.post(`${this.url}/camion/registrar`, camion, { headers: this.header });
  }

  listarCamiones(){
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/camiones`, { headers: this.header });
  }

  actualizarCamion(camion: CamionModel, id) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.patch(`${this.url}/camion/editar/${id}`, camion, { headers: this.header });
  }

  eliminarCamion(id) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.patch(`${this.url}/camion/editar/${id}`, {Estado: false}, { headers: this.header });
  }

  listarCamionesEliminados(){
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/camiones/disabled`, { headers: this.header });
  }

  habilitarCamion(id) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.patch(`${this.url}/camion/editar/${id}`, {Estado: true}, { headers: this.header });
  }

  // TODO: RUTAS
  crearRuta(ruta: RutaModel) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.post(`${this.url}/ruta/registrar`, ruta, { headers: this.header });
  }

  listarRutas() {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/ruta/lista`, { headers: this.header });
  }

  editarRuta(id: string, body: RutaModel) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.patch(`${this.url}/ruta/editar/${id}`, body, { headers: this.header })
  }

  eliminarRuta(id: string) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.patch(`${this.url}/ruta/editar/${id}`, { Estado: false }, { headers: this.header });
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
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/reporte/listadoproductos`, { headers: this.header });
  }

  calculoDiario(id) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/reporte/calculodiario/${id}, { headers: this.header }`)
  }

  getSolidoInicial(nombre) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/menu/productos/getSolidoInicial?solidoinicial=${nombre}`, { headers: this.header });
  }

  getLiquidoInicial(nombre) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/menu/productos/getLiquidoInicial?liquidoinicial=${nombre}`, { headers: this.header });
  }

  getSolidoPrimaria(nombre) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/menu/productos/getSolidoPrimario?solidoprimario=${nombre}`, { headers: this.header });
  }

  getLiquidoPrimaria(nombre) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/menu/productos/getLiquidoPrimario?liquidoprimaria=${nombre}`, { headers: this.header });
  }

  getSolidoSecundaria(nombre) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/menu/productos/getSolidoSegundario?solidosegundario=${nombre}`, { headers: this.header });
  }

  getLiquidoSecundaria(nombre) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/menu/productos/getLiquidoSegundario?liquidosegundario=${nombre}`, { headers: this.header });
  }

  createMenu(menu: MenuModel) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.post(`${this.url}/menu/registrar/menudiario`, menu, { headers: this.header });
  }

  listarMenuEbaAprobados() {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/menu/listado/eba-aprobado`, { headers: this.header });
  }

  listarMenuEbaNoAprobados() {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/menu/listado/eba-no-aprobado`, { headers: this.header });
  }

  listarMenuUnaceAprobados() {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/menu/listado/unace-aprobado`, { headers: this.header });
  }

  listarMenuUnaceNoAprobados() {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/menu/listado/unace-no-aprobado`, { headers: this.header });
  }

  listarMenu(id) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/listarMenu/${id}`, { headers: this.header });
  }

  aprobarMenuEBA(id, body) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.patch(`${this.url}/menu/aprobar/menueba/${id}`, body, { headers: this.header });
  }

  listarMenuUnace() {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/menu/listado/unace`, { headers: this.header });
  }

  aprobarMenuUnace(id, body) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.patch(`${this.url}/menu/aprobar/menuunace/${id}`, body, { headers: this.header });
  }

  listadoMenusAprobados() {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/menu/listado/aprobado`, { headers: this.header });
  }

  listadoMenusNoAprobados() {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/menu/listado/noaprobado`, { headers: this.header });
  }

  actualizarMenu(id, body) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.patch(`${this.url}/menu/update/menudiario/${id}`, body, { headers: this.header });
  }

  // TODO: REPORTES
  menusAprobados( body ) {
    console.log(body)
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.post(`${this.url}/reporte/menu/aprobado`, body , { headers: this.header });
  }

  registrarPH(body: PhModel){
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.post(`${this.url}/registerph/registrar`, body, { headers: this.header });
  }

  entregaLote(lote, body) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.post(`${this.url}/reporte/entrega/lote?codigo=${lote}`, body ,{ headers: this.header });
  }

  productosDisponibles(body) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.post(`${this.url}/reporte/productos/disponibles`, body, { headers: this.header });
  }

  consolidadoUe(colegio, body) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.post(`${this.url}/reporte/consolidado/colegio?colegio=${colegio}`, body, { headers: this.header });
  }

  consolidadoGlobal(body) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.post(`${this.url}/reporte/consolidado/global`, body, { headers: this.header });
  }

  consolidadoProducto(body) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.post(`${this.url}/reporte/consolidado/producto`, body, { headers: this.header });
  }

  estadistico(obj) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.post(`${this.url}/reporte/estadistico/incidencias`, obj, { headers: this.header });
  }

  incidencias(body) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.post(`${this.url}/reporte/cambios/incidencias`, body, { headers: this.header });
  }

  ruteo(ruta) {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/reporte/ruteo/colegio?ruta=${ruta}`, { headers: this.header });
  }

  // TODO: BOLETA
  crearBoleta(id){
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/boleta/registrar/${id}, { headers: this.header }`)
  }

  listarBoletas() {
    this.header = this.header.set('x-access-token', this.userToken );
    return this.http.get(`${this.url}/allboletas`, { headers: this.header });
  }

}
