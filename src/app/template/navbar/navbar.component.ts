import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModelUser } from 'src/app/models/user.model';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  setSesion:boolean=false;

  subscripcion: Subscription= new Subscription;

  constructor( private servicionAutenticacion:AutenticacionService) { }

  ngOnInit(): void {
    this.subscripcion = this.servicionAutenticacion.obtenerDatosUsuarioEnSesion().subscribe((datos:ModelUser)=>{
      this.setSesion=datos.islogin;  
    });
  }

}
