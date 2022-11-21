import { core } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Modelcliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';


@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  fValidator: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'fecha': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'correo': ['', [Validators.required, Validators.email]],

  });

  constructor(private fb: FormBuilder,
    private router: Router,
    private clienteServicio: ClienteService
  ) { }

  ngOnInit(): void {
  }

  crearCliente() {
    let nombre = this.fValidator.controls["nombre"].value;
    let fecha = this.fValidator.controls["fecha"].value;
    let telefono = this.fValidator.controls["telefono"].value;
    let correo = this.fValidator.controls["correo"].value;
    let cliente = new Modelcliente();
    cliente.nombre = nombre;
    cliente.fecha = '2022-11-16T03:55:19.473Z';
    cliente.telefono = telefono;
    cliente.correo = correo;

    this.clienteServicio.crearCliente(cliente).subscribe(
      {
        next: (v) => {
          alert('El cliente se creo con exito ');
          console.log(v);
          this.router.navigate(["/administracion/buscar-cliente"]);
        },
        error: (e: any) => {
          console.error(e);
          alert("Error al crear cliente !")
        },

        complete: () => console.info('se guardo cliente')
      }





    );
  }



}
