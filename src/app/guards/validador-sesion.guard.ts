import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from '../services/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class ValidadorSesionGuard implements CanActivate {

  constructor(private seguridadService:AutenticacionService,
    private router: Router ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("Entre al guardian");
    console.log(this.seguridadService.obtenerInformacionSesion());
    if(this.seguridadService.obtenerInformacionSesion()){
      return true;
    }else{
      console.log("no datos en sesión");
      this.router.navigate(['/home']);
      return false;
    }
  }

}
