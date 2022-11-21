import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Modelcliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.component.html',
  styleUrls: ['./eliminar-cliente.component.css']
})
export class EliminarClienteComponent implements OnInit {
  id:string="";
  fValidator: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
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
          this.fValidator.controls["nombre"].setValue(v.nombre);
          this.fValidator.controls["telefono"].setValue(v.telefono);
          this.fValidator.controls["correo"].setValue(v.correo);
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

  eliminarCliente() {
    let id = this.fValidator.controls["id"].value;


    this.clienteServicio.eliminarCliente(id).subscribe(
      {
        next: (v) => {
          alert('Cliente Eliminado');
          console.log(v);
          this.router.navigate(["/administracion/buscar-cliente"]);
        },
        error: (e: any) => {
          console.error(e);
          alert("Error eliminar cliente !")
        },
        complete: () => console.info('se elimino el cliente')
      }
    );
  }

}
