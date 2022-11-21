import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.css']
})
export class CerrarSesionComponent implements OnInit {

  constructor( private servicionSeguridad:AutenticacionService,
    private router:Router ) { }

  ngOnInit(): void {
  this.servicionSeguridad.eliminarSesion();
  this.router.navigate(['/home']);
  }

}
