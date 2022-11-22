import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guards/validador-sesion.guard';
import { BuscarClienteComponent } from './clientes/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './clientes/eliminar-cliente/eliminar-cliente.component';
import { BuscarEmpleadoComponent } from './empleados/buscar-empleado/buscar-empleado.component';
import { CrearEmpleadoComponent } from './empleados/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './empleados/editar-empleado/editar-empleado.component';
import { EliminarEmpleadoComponent } from './empleados/eliminar-empleado/eliminar-empleado.component';

const routes: Routes = [
  {
    path:'crear-empleado',
    component:CrearEmpleadoComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:'editar-empleado',
    component:EditarEmpleadoComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:'eliminar-empleado',
    component:EliminarEmpleadoComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:'buscar-empleado',
    component:BuscarEmpleadoComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:'crear-cliente',
    component:CrearClienteComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:'editar-cliente/:id',
    component:EditarClienteComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:'eliminar-cliente/:id',
    component:EliminarClienteComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:'buscar-cliente',
    component:BuscarClienteComponent,
    canActivate:[ValidadorSesionGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
