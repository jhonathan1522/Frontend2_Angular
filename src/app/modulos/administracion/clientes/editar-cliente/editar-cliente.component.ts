import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Modelcliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})

export class EditarClienteComponent implements OnInit {
  id:string="";
  fValidator: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'clave': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'fecha': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'correo': ['', [Validators.required, Validators.email]],

  });

  constructor(private fb: FormBuilder,
    private router: Router,
    private clienteServicio: ClienteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.buscarCliente();
  }

  //rellena formulario cliente
  buscarCliente(){
    this.clienteServicio.buscarClientePorId(this.id).subscribe(
      {
        next: (v) => {
          this.fValidator.controls["id"].setValue(this.id);
          this.fValidator.controls["clave"].setValue(v.Clave);
          this.fValidator.controls["nombre"].setValue(v.Nombre);
          this.fValidator.controls["fecha"].setValue('2022-11-18T19:55');
          this.fValidator.controls["telefono"].setValue(v.Telefono);
          this.fValidator.controls["correo"].setValue(v.Email);
          console.log(v);
          //this.router.navigate(["/administracion/buscar-cliente"]);
        },
        error: (e: any) => {
          console.error(e);
          alert("Error al crear cliente !")
        },

        complete: () => console.info('se guardo cliente')
      }
    );
  }

  editarCliente() {
    let id = this.fValidator.controls["id"].value;
    let clave = this.fValidator.controls["clave"].value;
    let nombre = this.fValidator.controls["nombre"].value;
    let fecha = this.fValidator.controls["fecha"].value;
    let telefono = this.fValidator.controls["telefono"].value;
    let correo = this.fValidator.controls["correo"].value;
    let cliente = new Modelcliente();
    cliente.Nombre = nombre;
    cliente.Fecha_nacimiento = '2022-11-16T03:55:19.473Z';
    cliente.Telefono = telefono;
    cliente.Email = correo;

    cliente.id=this.id;
    cliente.Clave=clave;

    this.clienteServicio.editarCliente(cliente).subscribe(
      {
        next: (v) => {
          alert('El actualizo el cliente con exito ');
          console.log(v);
          this.router.navigate(["/administracion/buscar-cliente"]);
        },
        error: (e: any) => {
          console.error(e);
          alert("Error al editar cliente !")
        },

        complete: () => console.info('se edito el cliente')
      }
    );
  }

}

