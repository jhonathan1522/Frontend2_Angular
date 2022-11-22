import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModelUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {


  url:string='http://localhost:3000';
  dataEnSesion = new BehaviorSubject<ModelUser>(new ModelUser());

  constructor( private http:HttpClient ) {
    this.verificarSesion();
  }

  verificarSesion(){
    let vdata=this.obtenerSesion();
    if (vdata) {
      this.refrescarDatosSession(vdata);
    }
  }

  refrescarDatosSession(datos:ModelUser){
    this.dataEnSesion.next(datos);
  }

  validaruser(usuario:string, clave:string):Observable<ModelUser>{
    return this.http.post<ModelUser>(`${this.url}/clientes/identificarCliente`, {
      Usuario:usuario,
      Clave:clave
    });
  }


  guardarSesion(data:ModelUser){
    data.islogin=true;
    let stringData= JSON.stringify(data);
    localStorage.setItem("dataSesion",stringData);
    this.refrescarDatosSession(data);
  }

  obtenerSesion(){
    let dataString= localStorage.getItem("dataSesion");
    if(dataString){
      let data=JSON.parse(dataString);
      return data;
    }else{
      return null;
    }
  }

  eliminarSesion(){
    localStorage.removeItem("dataSesion");
    this.refrescarDatosSession(new ModelUser());
  }

  seInicioSesion(){
    let dataString = localStorage.getItem("dataSesion");
      return dataString ;
  }

  obtenerDatosUsuarioEnSesion(){
    return this.dataEnSesion.asObservable();
  }

  obtenerToken(){
    let dataString = localStorage.getItem("dataSesion");
    if(dataString){
      let token = JSON.parse(dataString);
      return token.token;
    }else{
      return '';
    }
  }

  obtenerInformacionSesion(){
    let datosString = localStorage.getItem("dataSesion");
    console.log("datosString" + datosString);
    if(datosString)
      return JSON.parse(datosString);
    else
      return null;
  }




}
