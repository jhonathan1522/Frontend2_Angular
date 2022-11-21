import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './template/error/error.component';
import { HomeComponent } from './template/home/home.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"",
    pathMatch:'full',
    redirectTo:'/home'
  },
  {
    path:'seguridad',
    loadChildren:()=> import("./modulos/seguridad/seguridad.module").then( modu=>modu.SeguridadModule)
  },
  {
    path:'administracion',
    loadChildren:()=> import("./modulos/administracion/administracion.module").then(modu=>modu.AdministracionModule)
  },
  {
    path:"**",
    component:ErrorComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
