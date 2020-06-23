import { Component, OnInit } from '@angular/core';
import {RolModel} from "../../../models/rol.model";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-usuario-roles',
  templateUrl: './usuario-roles.component.html',
  styles: [
  ]
})
export class UsuarioRolesComponent implements OnInit {

  rol: RolModel = new RolModel();
  permiso1: true;
  idUser: string = '5eeada870070af04fa43a684';
  roles: any;

  editRol: any = '';
  indexEdit: any = '';

  desRol: any = '';

  permisosEditRol: Object[] = [];

  permisos: Object[] = [
    { nombre: 'permiso1', estado: false },
    { nombre: 'permiso2', estado: false },
    { nombre: 'permiso3', estado: false },
    { nombre: 'permiso4', estado: false },
    { nombre: 'permiso5', estado: false },
    { nombre: 'permiso6', estado: false },
    { nombre: 'permiso7', estado: false },
    { nombre: 'permiso8', estado: false },
    { nombre: 'permiso9', estado: false },
    { nombre: 'permiso10', estado: false },
  ];

  constructor( private service: UserService, private router:Router) { }

  ngOnInit(): void {
    this.service.pedirRoles().subscribe( resp => {
      this.roles = resp;
      this.desRol = '';
      // console.log(this.roles);
    });
  }

  isSelected( index: number ) {
    // console.log(index);
    // cambiamos el estado del permiso, true a false, false a true
    this.permisos[index]['estado'] = !this.permisos[index]['estado'];

    // console.log( this.permisos[index]['estado'] )
  }

  crearRol( nombreRol, descripcion) {
    // console.log(nombreRol.value);

    this.rol.NombreRol = nombreRol.value;
    this.rol.Description = descripcion.value;
    this.rol.IdUser = this.idUser;
    let i = 0;

    for (let permiso of this.permisos ) {
      if ( permiso['estado'] === true ) {
        i = i + 1;
        let obj = {
          NombrePermiso: permiso['nombre'],
          Idpermiso: i
        }

        this.rol.Permiso.push( obj );
      }
    }

    // console.log( this.rol );

    this.service.crearRol(this.rol).subscribe( resp => {
      // console.log(resp);
      location.reload();
    });
  }

  editarRol( index: number ) {
    this.indexEdit = index;
    this.editRol = this.roles[index];
    // console.log(this.editRol);

    this.permisosEditRol = [
      { nombre: 'permiso1', estado: false },
      { nombre: 'permiso2', estado: false },
      { nombre: 'permiso3', estado: false },
      { nombre: 'permiso4', estado: false },
      { nombre: 'permiso5', estado: false },
      { nombre: 'permiso6', estado: false },
      { nombre: 'permiso7', estado: false },
      { nombre: 'permiso8', estado: false },
      { nombre: 'permiso9', estado: false },
      { nombre: 'permiso10', estado: false },
    ];

    for( let i=0; i<this.editRol.Permiso.length; i++ ) {
      for(let j=0; j<this.permisosEditRol.length; j++) {
        if (this.editRol.Permiso[i].NombrePermiso === this.permisosEditRol[j]['nombre']) {
          this.permisosEditRol[j]['estado'] = true;
        }
      }
    }

    // console.log(this.permisosEditRol)
  }

  isSelectedEdit(index: number) {
    this.permisosEditRol[index]['estado'] = !this.permisosEditRol[index]['estado'];
    // console.log(this.permisosEditRol);
  }

  guardarEditRol( nombreRol, descripcionRol ) {
    this.rol.NombreRol = nombreRol.value;
    this.rol.Description = descripcionRol.value;
    this.rol.IdUser = this.idUser;
    this.rol.Estado = true;
    let i = 0;

    for (let permiso of this.permisosEditRol ) {
      if ( permiso['estado'] === true ) {
        i = i + 1;
        let obj = {
          NombrePermiso: permiso['nombre'],
          Idpermiso: i
        }

        this.rol.Permiso.push( obj );
      }
    }

    console.log(this.rol);
    console.log( this.roles[this.indexEdit]._id );
    this.service.actualizarRol( this.rol, this.roles[this.indexEdit]._id ).subscribe( rep => {
      console.log(rep);
      location.reload();
    })
  }

  desactivarRol( index: number ) {
    console.log(this.roles[index]);
    this.desRol = this.roles[index];
  }

  confirmarDesactivar() {
    this.service.disableRol( this.desRol._id).subscribe( resp => {
      console.log(resp);
      location.reload();
    });
  }

}
