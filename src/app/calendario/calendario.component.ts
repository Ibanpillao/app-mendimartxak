import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../services/consultas.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
  providers: [ConsultasService]

})
export class CalendarioComponent implements OnInit {

  public listaMarchasFecha : Array<any> = [];
  public urtea : number = new Date().getFullYear();

  constructor(private _consultaServicio : ConsultasService) { }

  ngOnInit(): void {
    this.getMartxas();

  }

  getMartxas() {
    this._consultaServicio.Read().subscribe({
      next : data => {
        data.forEach((valor : any) => {

          // Parsear fecha MySQL a objeto Date Javascript
          var fechaMysql : Date = new Date(Date.parse(valor.fecha)); 

          const opciones : any = {month: 'short', day: 'numeric'};

          // Obtener formato segun localizacion
          var fechaJS : string = fechaMysql.toLocaleDateString(`es-ES`,opciones);
          
          this.listaMarchasFecha.push([valor.nombre,fechaJS,valor.distancia]);
        });
      },
      error : error => {
        console.log(error);
      }
    });
  }

}
