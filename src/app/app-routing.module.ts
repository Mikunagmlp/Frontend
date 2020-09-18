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
import {CamionesCrearComponent} from "./pages/home/camiones-crear/camiones-crear.component";
import {CamionesEditarComponent} from "./pages/home/camiones-editar/camiones-editar.component";
import {RecoverPasswordComponent} from "./pages/login/recover-password/recover-password.component";
import {UsuariosEliminadosComponent} from "./pages/home/eliminados/usuarios-eliminados/usuarios-eliminados.component";
import {ColegiosEliminadosComponent} from "./pages/home/eliminados/colegios-eliminados/colegios-eliminados.component";
import {ProveedoresEliminadosComponent} from "./pages/home/eliminados/proveedores-eliminados/proveedores-eliminados.component";
import {AlmacenesEliminadosComponent} from "./pages/home/eliminados/almacenes-eliminados/almacenes-eliminados.component";
import {ProductosEliminadosComponent} from "./pages/home/eliminados/productos-eliminados/productos-eliminados.component";
import {CamionesEliminadosComponent} from "./pages/home/eliminados/camiones-eliminados/camiones-eliminados.component";
import {CalculosDiariosComponent} from "./pages/home/calculos-diarios/calculos-diarios.component";
import {MenuElaboracionComponent} from "./pages/home/menu-elaboracion/menu-elaboracion.component";
import {MenuEbaComponent} from "./pages/home/menu-eba/menu-eba.component";
import {MenuJefaComponent} from "./pages/home/menu-jefa/menu-jefa.component";
import {ProveedoresAsignacionlotesComponent} from "./pages/home/proveedores-asignacionlotes/proveedores-asignacionlotes.component";
import {ReporteConsultalotesComponent} from "./pages/home/reporte-consultalotes/reporte-consultalotes.component";
import {ReporteMenuconfirmadoComponent} from "./pages/home/reporte-menuconfirmado/reporte-menuconfirmado.component";
import {ReporteProductosdispComponent} from "./pages/home/reporte-productosdisp/reporte-productosdisp.component";
import {ReporteConsolidadoueComponent} from "./pages/home/reporte-consolidadoue/reporte-consolidadoue.component";
import {ReporteConsolidadoglobComponent} from "./pages/home/reporte-consolidadoglob/reporte-consolidadoglob.component";
import {ReporteConsolidadoprepComponent} from "./pages/home/reporte-consolidadoprep/reporte-consolidadoprep.component";
import {ReporteEstadisticoComponent} from "./pages/home/reporte-estadistico/reporte-estadistico.component";
import {ReporteIncidenciaComponent} from "./pages/home/reporte-incidencia/reporte-incidencia.component";
import {ReporteRuteoComponent} from "./pages/home/reporte-ruteo/reporte-ruteo.component";
import {ReporteEntregaComponent} from "./pages/home/reporte-entrega/reporte-entrega.component";
import {CrearRutaComponent} from "./pages/home/crear-ruta/crear-ruta.component";
import {EditarRutaComponent} from "./pages/home/editar-ruta/editar-ruta.component";
import {Verificarph2Component} from "./pages/home/verificarph2/verificarph2.component";
import {BoletaentregaComponent} from "./pages/home/boletaentrega/boletaentrega.component";


const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recover-password', component: RecoverPasswordComponent },

  // TODO: para produccion utilizar lo que esta comentado


  { path: 'home', component: HomeComponent, canActivate: [ AuthGuard ] , children:[
  // { path: 'home', component: HomeComponent, children:[
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'nuevo-usuario', component: NuevoUsuarioComponent },
      { path: 'usuario-roles', component: UsuarioRolesComponent },

      { path: 'ue-crear', component: UeCrearComponent },
      { path: 'ue-editar', component: UeEditarComponent },
      { path: 'ue-poblacion-beneficiada', component: UePoblacionBeneficiadaComponent },

      { path: 'proveedores-crear', component: ProveedoresCrearComponent },
      { path: 'proveedores-editar', component: ProveedoresEditarComponent },
      { path: 'proveedores-asignacionlotes', component: ProveedoresAsignacionlotesComponent },

      { path: 'productos-crear', component: ProductosCrearComponent },
      { path: 'productos-editar', component: ProductosEditarComponent },

      { path: 'almacen-crear', component: AlmacenCrearComponent },
      { path: 'almacen-editar', component: AlmacenEditarComponent },


      { path: 'camiones-crear', component:CamionesCrearComponent },
      { path: 'camiones-editar', component:CamionesEditarComponent },

      { path: 'ruta-crear', component: CrearRutaComponent },
      { path: 'ruta-editar', component: EditarRutaComponent },

      { path: 'usuarios-eliminados', component:UsuariosEliminadosComponent },
      { path: 'colegios-eliminados', component:ColegiosEliminadosComponent },
      { path: 'proveedores-eliminados', component:ProveedoresEliminadosComponent },
      { path: 'almacenes-eliminados', component:AlmacenesEliminadosComponent },
      { path: 'productos-eliminados', component:ProductosEliminadosComponent },
      { path: 'camiones-eliminados', component:CamionesEliminadosComponent },

      { path: 'calculos-diarios', component: CalculosDiariosComponent },
      { path: 'menu-elaboracion', component: MenuElaboracionComponent },
      { path: 'menu-eba', component: MenuEbaComponent },
      { path: 'menu-jefa', component: MenuJefaComponent },

      { path: 'reporte-consultalotes', component: ReporteConsultalotesComponent },
      { path: 'reporte-menuconfirmado', component: ReporteMenuconfirmadoComponent },
      { path: 'reporte-productosdisp', component: ReporteProductosdispComponent },
      { path: 'reporte-consolidadoue', component: ReporteConsolidadoueComponent },
      { path: 'reporte-consolidadoglob', component: ReporteConsolidadoglobComponent },
      { path: 'reporte-consolidadoprep', component: ReporteConsolidadoprepComponent },
      { path: 'reporte-estadistico', component: ReporteEstadisticoComponent },
      { path: 'reporte-incidencia', component: ReporteIncidenciaComponent },
      { path: 'reporte-ruteo', component: ReporteRuteoComponent },
      { path: 'reporte-entrega', component: ReporteEntregaComponent },

      
      { path: 'verificarph2', component: Verificarph2Component },
      { path: 'boletaentrega', component: BoletaentregaComponent },

      { path: '**', redirectTo: 'usuarios' }
    ] },

  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
