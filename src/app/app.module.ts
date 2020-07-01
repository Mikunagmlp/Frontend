import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { TopbarHeaderComponent } from './pages/shared/topbar-header/topbar-header.component';
import { LefSidebarComponent } from './pages/shared/lef-sidebar/lef-sidebar.component';
import { UsuariosComponent } from './pages/home/usuarios/usuarios.component';
import { NuevoUsuarioComponent } from './pages/home/nuevo-usuario/nuevo-usuario.component';
import { UsuarioRolesComponent } from './pages/home/usuario-roles/usuario-roles.component';
import { UeCrearComponent } from './pages/home/ue-crear/ue-crear.component';
import { UeEditarComponent } from './pages/home/ue-editar/ue-editar.component';
import { UePoblacionBeneficiadaComponent } from './pages/home/ue-poblacion-beneficiada/ue-poblacion-beneficiada.component';
import { ProveedoresCrearComponent } from './pages/home/proveedores-crear/proveedores-crear.component';
import { ProveedoresEditarComponent } from './pages/home/proveedores-editar/proveedores-editar.component';
import { ProductosCrearComponent } from './pages/home/productos-crear/productos-crear.component';
import { ProductosEditarComponent } from './pages/home/productos-editar/productos-editar.component';
import { AlmacenEditarComponent } from './pages/home/almacen-editar/almacen-editar.component';
import { AlmacenCrearComponent } from './pages/home/almacen-crear/almacen-crear.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TopbarHeaderComponent,
    LefSidebarComponent,
    UsuariosComponent,
    NuevoUsuarioComponent,
    UsuarioRolesComponent,
    UeCrearComponent,
    UeEditarComponent,
    UePoblacionBeneficiadaComponent,
    ProveedoresCrearComponent,
    ProveedoresEditarComponent,
    ProductosCrearComponent,
    ProductosEditarComponent,
    AlmacenEditarComponent,
    AlmacenCrearComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
