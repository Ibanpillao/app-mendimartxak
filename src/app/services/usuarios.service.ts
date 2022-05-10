import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(public _htpp : HttpClient) {}

  LoginUser(usuario : any) : Observable<any> {
    return this._htpp.post('https://mendimartxas.herokuapp.com/login-usuario/',usuario);
  }
  
  RegistroUser(usuario : any) : Observable<any> {
    return this._htpp.post('https://mendimartxas.herokuapp.com/registro-usuario/',usuario);
  }
}

