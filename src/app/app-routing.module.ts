import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {UsuariosComponent} from "./pages/home/usuarios/usuarios.component";
import {NuevoUsuarioComponent} from "./pages/home/nuevo-usuario/nuevo-usuario.component";
import {UsuarioRolesComponent} from "./pages/home/usuario-roles/usuario-roles.component";
import {AuthGuard} from "./guards/auth.guard";
import {UeCrearComponent} from "./pages/home/ue-crear/ue-crear.component";
import {UeEditarComponent} from "./pages/home/ue-editar/ue-editar.component";
import {UePoblacionBeneficiadaComponent} from "./pages/home/ue-poblacion-beneficiada/ue-poblacion-beneficiada.component";
import {ProveedoresCrearComponent} from "./pages/home/proveedores-crear/proveedores-crear.component";
import {ProveedoresEditarComponent} from "./pages/home/proveedores-editar/proveedores-editar.component";
import {ProductosCrearComponent} from "./pages/home/productos-crear/productos-crear.component";
import {AlmacenCrearComponent} from "./pages/home/almacen-crear/almacen-crear.component";
import {AlmacenEditarComponent} from "./pages/home/almacen-editar/almacen-editar.component";
import {ProductosEditarComponent} from "./pages/home/productos-editar/productos-editar.component";
import {CategoriaCrearComponent} from "./pages/home/categoria-crear/categoria-crear.component";
import {CategoriaEditarComponent} from "./pages/home/categoria-editar/categoria-editar.component";
import {CamionesCrearComponent} from "./pages/home/camiones-crear/camiones-crear.component";
import {CamionesEditarComponent} from "./pages/home/camiones-editar/camiones-editar.component";
import {RecoverPasswordComponent} from "./pages/login/recover-password/recover-password.component";
import {UsuariosEliminadosComponent} from "./pages/home/eliminados/usuarios-eliminados/usuarios-eliminados.component";
import {ColegiosEliminadosComponent} from "./pages/home/eliminados/colegios-eliminados/colegios-eliminados.component";
import {ProveedoresEliminadosComponent} from "./pages/home/eliminados/proveedores-eliminados/proveedores-eliminados.component";
import {AlmacenesEliminadosComponent} from "./pages/home/eliminados/almacenes-eliminados/almacenes-eliminados.component";
import {CategoriasEliminadosComponent} from "./pages/home/eliminados/categorias-eliminados/categorias-eliminados.component";
import {ProductosEliminadosComponent} from "./pages/home/eliminados/productos-eliminados/productos-eliminados.component";
import {CamionesEliminadosComponent} from "./pages/home/eliminados/camiones-eliminados/camiones-eliminados.component";


const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recover-password', component: RecoverPasswordComponent },

  // TODO: para produccion utilizar lo que esta comentado


  // { path: 'home', component: HomeComponent, canActivate: [ AuthGuard ] , children:[
  { path: 'home', component: HomeComponent, children:[
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'nuevo-usuario', component: NuevoUsuarioComponent },
      { path: 'usuario-roles', component: UsuarioRolesComponent },

      { path: 'ue-crear', component: UeCrearComponent },
      { path: 'ue-editar', component: UeEditarComponent },
      { path: 'ue-poblacion-beneficiada', component: UePoblacionBeneficiadaComponent },

      { path: 'proveedores-crear', component: ProveedoresCrearComponent },
      { path: 'proveedores-editar', component: ProveedoresEditarComponent },

      { path: 'productos-crear', component: ProductosCrearComponent },
      { path: 'productos-editar', component: ProductosEditarComponent },

      { path: 'almacen-crear', component: AlmacenCrearComponent },
      { path: 'almacen-editar', component: AlmacenEditarComponent },

      { path: 'categoria-crear', component:CategoriaCrearComponent },
      { path: 'categoria-editar', component:CategoriaEditarComponent },

      { path: 'camiones-crear', component:CamionesCrearComponent },
      { path: 'camiones-editar', component:CamionesEditarComponent },


      { path: 'usuarios-eliminados', component:UsuariosEliminadosComponent },
      { path: 'colegios-eliminados', component:ColegiosEliminadosComponent },
      { path: 'proveedores-eliminados', component:ProveedoresEliminadosComponent },
      { path: 'almacenes-eliminados', component:AlmacenesEliminadosComponent },
      { path: 'categorias-eliminados', component:CategoriasEliminadosComponent },
      { path: 'productos-eliminados', component:ProductosEliminadosComponent },
      { path: 'camiones-eliminados', component:CamionesEliminadosComponent },

      { path: '**', redirectTo: 'usuarios' }
    ] },

  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
