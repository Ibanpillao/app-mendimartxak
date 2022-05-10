import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConsultasService {

  constructor(public _htpp : HttpClient) {}

  Create(martxa : any) : Observable<any> {
    return this._htpp.post('https://mendimartxas.herokuapp.com/addMendiMartxa/',martxa);
  }

  Read() : Observable<any> {
    return this._htpp.get('https://mendimartxas.herokuapp.com/mendimartxas');
  }

  ReadOne(idMartxa : number) : Observable<any> {
    return this._htpp.get('https://mendimartxas.herokuapp.com/mendimartxas/' + idMartxa);
  }

  Update(idMartxa : number, datos : any) : Observable<any> {
    return this._htpp.put('https://mendimartxas.herokuapp.com/update/' + idMartxa, datos);
  }

  Delete(idMartxa : number) : Observable<any> {
    return this._htpp.delete('https://mendimartxas.herokuapp.com/borrar/' + idMartxa);
  }

}
