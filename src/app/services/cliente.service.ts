import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modelcliente } from '../models/cliente.model';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url:string='http://localhost:3000';
  token: String='';


  constructor( private http:HttpClient, private servicioAutenticacion:AutenticacionService) {  
    this.token=servicioAutenticacion.obtenerToken();
  }

  getClientes(): Observable<Modelcliente[]>{
    return this.http.get<Modelcliente[]>(`${this.url}/clientes`);
  }

  buscarClientePorId(id:string): Observable<Modelcliente>{
    return this.http.get<Modelcliente>(`${this.url}/clientes/${id}`);
  }


  
  crearCliente(cliente:Modelcliente):Observable<Modelcliente>{
    return this.http.post<Modelcliente>( 
      `${this.url}/clientes`,
      cliente,
      {
        headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    })
  }

  editarCliente(cliente:Modelcliente):Observable<Modelcliente>{
    return this.http.put<Modelcliente>( 
      `${this.url}/clientes/${cliente.id}`,
      cliente,
      {
        headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    })
  }

  eliminarCliente(id:string ):Observable<any>{
    return this.http.delete( 
      `${this.url}/clientes/${id}`,
      {
        headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    })
  }  

}
