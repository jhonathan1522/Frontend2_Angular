import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
var CryptoJS = require("crypto-js");

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fValidator:FormGroup = this.fb.group({
    'usuario':['',[Validators.required,Validators.email ]],
    'clave':['',[Validators.required]]
  }); 

  constructor(private fb:FormBuilder ,
    private SerguridadService: AutenticacionService,
    private router:Router
    ) { }

  ngOnInit(): void {
  
  }

  login(){
    const user = this.fValidator.controls["usuario"].value;
    const pass = this.fValidator.controls["clave"].value;
    let passSeguro=CryptoJS.MD5(pass).toString();
    this.SerguridadService.validaruser(user,passSeguro).subscribe( {
      next:(v)=> {
        this.SerguridadService.guardarSesion(v);
        this.router.navigate(['/home']);
      },

      error:(e)=>{
        console.error(e);
        alert("Datos incorrectos !")} ,

      complete:()=> console.info('log completo')
    }
    )
  }

}
