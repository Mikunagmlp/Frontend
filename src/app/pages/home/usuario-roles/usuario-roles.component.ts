import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-roles',
  templateUrl: './usuario-roles.component.html',
  styles: [
  ]
})
export class UsuarioRolesComponent implements OnInit {

  roles: Object[] = [{
      class: 'tab-pane active',
      idrol: 'rol1',
      nombre: 'Funcionario Root',
      descripcion: 'El funcionario Root se encarga de la aprobación de menú y reportes',
      permisos: 'aprovacion de menu ,reportes'
    },
    {
      class: 'tab-pane',
      idrol: 'rol2',
      nombre: 'Administrativo',
      descripcion: 'El rol administrativo de acceder a reportes,reasignar montos, raciones o productos',
      permisos: 'reportes, reasignar montos raciones o productos'
    },
    {
      class: 'tab-pane',
      idrol: 'rol3',
      nombre: 'Técnico UNACE',
      descripcion: 'El técnico Unace está  encargado de realizar la elaboración de menús',
      permisos: 'elavoracion del menu'
    },
    {
      class: 'tab-pane',
      idrol: 'rol4',
      nombre: 'Técnico EVA',
      descripcion: 'El técnico EVA es el encargado de aprobar,modificar menús y asignar por rutas  la entrada de productos,asignación de empresas y lotes',
      permisos: 'modificar el menu, aprovacion del menu,asignar por rutas la entra de productos,asignacion de empresas y lotes'
    },
    {
      class: 'tab-pane',
      idrol: 'rol5',
      nombre: 'Técnico de Transporte',
      descripcion: 'Encargado de vista por menú y acceso a rutas.',
      permisos: 'ver menu y ruta'
    },
    {
      class: 'tab-pane',
      idrol: 'rol6',
      nombre: 'Usuario Siremo',
      descripcion: 'Encargado de realizar el control de Ph, obervaciones y firma.',
      permisos: 'control ph, observaciones, firma'
    },
    {
      class: 'tab-pane',
      idrol: 'rol7',
      nombre: 'Usuario Unidad Educativa',
      descripcion: 'El usuario Unidad Educativa se encarga del envio del Menú',
      permisos: 'envio de menu'
    },];

  ngOnInit(): void {
  }

}
