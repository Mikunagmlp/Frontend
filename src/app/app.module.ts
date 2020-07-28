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
import { CategoriaCrearComponent } from './pages/home/categoria-crear/categoria-crear.component';
import { CategoriaEditarComponent } from './pages/home/categoria-editar/categoria-editar.component';
import { CamionesCrearComponent } from './pages/home/camiones-crear/camiones-crear.component';
import { CamionesEditarComponent } from './pages/home/camiones-editar/camiones-editar.component';
import { RecoverPasswordComponent } from './pages/login/recover-password/recover-password.component';
import { UsuariosEliminadosComponent } from './pages/home/eliminados/usuarios-eliminados/usuarios-eliminados.component';
import { ColegiosEliminadosComponent } from './pages/home/eliminados/colegios-eliminados/colegios-eliminados.component';
import { ProveedoresEliminadosComponent } from './pages/home/eliminados/proveedores-eliminados/proveedores-eliminados.component';
import { AlmacenesEliminadosComponent } from './pages/home/eliminados/almacenes-eliminados/almacenes-eliminados.component';
import { CategoriasEliminadosComponent } from './pages/home/eliminados/categorias-eliminados/categorias-eliminados.component';
import { ProductosEliminadosComponent } from './pages/home/eliminados/productos-eliminados/productos-eliminados.component';
import { CamionesEliminadosComponent } from './pages/home/eliminados/camiones-eliminados/camiones-eliminados.component';

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
    CategoriaCrearComponent,
    CategoriaEditarComponent,
    CamionesCrearComponent,
    CamionesEditarComponent,
    RecoverPasswordComponent,
    UsuariosEliminadosComponent,
    ColegiosEliminadosComponent,
    ProveedoresEliminadosComponent,
    AlmacenesEliminadosComponent,
    CategoriasEliminadosComponent,
    ProductosEliminadosComponent,
    CamionesEliminadosComponent,
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
