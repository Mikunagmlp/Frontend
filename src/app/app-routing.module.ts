import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {UsuariosComponent} from "./pages/home/usuarios/usuarios.component";
import {NuevoUsuarioComponent} from "./pages/home/nuevo-usuario/nuevo-usuario.component";
import {UsuarioRolesComponent} from "./pages/home/usuario-roles/usuario-roles.component";
import {AuthGuard} from "./guards/auth.guard";


const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  // TODO: para produccion utilizar lo que esta comentado
  // { path: 'home', component: HomeComponent, canActivate: [ AuthGuard ] , children:[


  { path: 'home', component: HomeComponent, children:[
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'nuevo-usuario', component: NuevoUsuarioComponent },
      { path: 'usuario-roles', component: UsuarioRolesComponent },

      { path: '**', redirectTo: 'usuarios' }
    ] },

  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
