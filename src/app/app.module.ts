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
import { CamionesCrearComponent } from './pages/home/camiones-crear/camiones-crear.component';
import { CamionesEditarComponent } from './pages/home/camiones-editar/camiones-editar.component';
import { RecoverPasswordComponent } from './pages/login/recover-password/recover-password.component';
import { UsuariosEliminadosComponent } from './pages/home/eliminados/usuarios-eliminados/usuarios-eliminados.component';
import { ColegiosEliminadosComponent } from './pages/home/eliminados/colegios-eliminados/colegios-eliminados.component';
import { ProveedoresEliminadosComponent } from './pages/home/eliminados/proveedores-eliminados/proveedores-eliminados.component';
import { AlmacenesEliminadosComponent } from './pages/home/eliminados/almacenes-eliminados/almacenes-eliminados.component';
import { ProductosEliminadosComponent } from './pages/home/eliminados/productos-eliminados/productos-eliminados.component';
import { CamionesEliminadosComponent } from './pages/home/eliminados/camiones-eliminados/camiones-eliminados.component';
import { CalculosDiariosComponent } from './pages/home/calculos-diarios/calculos-diarios.component';
import { MenuElaboracionComponent } from './pages/home/menu-elaboracion/menu-elaboracion.component';
import { MenuEbaComponent } from './pages/home/menu-eba/menu-eba.component';
import { MenuJefaComponent } from './pages/home/menu-jefa/menu-jefa.component';
import { ProveedoresAsignacionlotesComponent } from './pages/home/proveedores-asignacionlotes/proveedores-asignacionlotes.component';
import { ReporteConsultalotesComponent } from './pages/home/reporte-consultalotes/reporte-consultalotes.component';
import { ReporteMenuconfirmadoComponent } from './pages/home/reporte-menuconfirmado/reporte-menuconfirmado.component';
import { ReporteProductosdispComponent } from './pages/home/reporte-productosdisp/reporte-productosdisp.component';
import { ReporteConsolidadoueComponent } from './pages/home/reporte-consolidadoue/reporte-consolidadoue.component';
import { ReporteConsolidadoglobComponent } from './pages/home/reporte-consolidadoglob/reporte-consolidadoglob.component';
import { ReporteConsolidadoprepComponent } from './pages/home/reporte-consolidadoprep/reporte-consolidadoprep.component';
import { ReporteEstadisticoComponent } from './pages/home/reporte-estadistico/reporte-estadistico.component';
import { ReporteIncidenciaComponent } from './pages/home/reporte-incidencia/reporte-incidencia.component';
import { ReporteRuteoComponent } from './pages/home/reporte-ruteo/reporte-ruteo.component';
import { ReporteEntregaComponent } from './pages/home/reporte-entrega/reporte-entrega.component';
import { CrearRutaComponent } from './pages/home/crear-ruta/crear-ruta.component';
import { EditarRutaComponent } from './pages/home/editar-ruta/editar-ruta.component';

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
    CamionesCrearComponent,
    CamionesEditarComponent,
    RecoverPasswordComponent,
    UsuariosEliminadosComponent,
    ColegiosEliminadosComponent,
    ProveedoresEliminadosComponent,
    AlmacenesEliminadosComponent,
    ProductosEliminadosComponent,
    CamionesEliminadosComponent,
    CalculosDiariosComponent,
    MenuElaboracionComponent,
    MenuEbaComponent,
    MenuJefaComponent,
    ProveedoresAsignacionlotesComponent,
    ReporteConsultalotesComponent,
    ReporteMenuconfirmadoComponent,
    ReporteProductosdispComponent,
    ReporteConsolidadoueComponent,
    ReporteConsolidadoglobComponent,
    ReporteConsolidadoprepComponent,
    ReporteEstadisticoComponent,
    ReporteIncidenciaComponent,
    ReporteRuteoComponent,
    ReporteEntregaComponent,
    CrearRutaComponent,
    EditarRutaComponent,
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
