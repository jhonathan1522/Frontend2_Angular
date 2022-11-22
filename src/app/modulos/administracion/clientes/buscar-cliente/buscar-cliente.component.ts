import { Component, OnInit } from '@angular/core';
import { Modelcliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.css']
})
export class BuscarClienteComponent implements OnInit {

  ListaClientes:Modelcliente[]=[];

  constructor(private clienteServicio:ClienteService) { }

  ngOnInit(): void {
    this.ObtenerListaClientes();
  }

  ObtenerListaClientes(){
    this.clienteServicio.getClientes().subscribe((datos:Modelcliente[])=>{
      this.ListaClientes=datos;
    } );
  }

}
