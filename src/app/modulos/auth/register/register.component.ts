import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Modelcliente } from 'src/app/models/cliente.model';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder ,
    private servicioCliente: ClienteService,
    private router:Router) { }

    formularioregister:FormGroup = this.fb.group({
      email: new FormControl('',[Validators.required,Validators.email ]),
      nombre: new FormControl('',[Validators.required]),
      telefono: new FormControl('',[Validators.required]),
      clave: new FormControl('',[Validators.required]),
      confirmclave: new FormControl('',[Validators.minLength(4),Validators.required])
    });

  ngOnInit(): void {
  }

  register() {

    let cliente = new Modelcliente();
    cliente.Nombre = this.formularioregister.controls["nombre"].value;
    cliente.Telefono = this.formularioregister.controls["telefono"].value;
    cliente.Email = this.formularioregister.controls["email"].value;
    cliente.Clave = this.formularioregister.controls["clave"].value;
    // el correo es el mismo usuario
    cliente.Usuario = this.formularioregister.controls["email"].value;
    if(cliente.Clave == this.formularioregister.controls["confirmclave"].value ){


    this.servicioCliente.crearCliente(cliente).subscribe(
      {
        next: (v) => {
          alert('Se ha registrado correctamente en la aplicación');
          console.log(v);
          this.router.navigate(["/auth/login"]);
        },
        error: (e: any) => {
          console.error(e);
          alert("Error al registrarse en la aplicación !")
        },

        complete: () => console.info('se registro de forma exitosa')
      }
    );
  }else{
    alert("Las claves ingresadas no son las mismas");
  }
  }


}
