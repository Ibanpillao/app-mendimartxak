import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../services/consultas.service';

@Component({
  selector: 'app-ultratrails',
  templateUrl: './ultratrails.component.html',
  styleUrls: ['./ultratrails.component.css'],
  providers: [ConsultasService]
})
export class UltratrailsComponent implements OnInit {

  public listaUltraTrail : Array <any> = [];

  constructor(private _consultaServicio : ConsultasService) { }

  ngOnInit(): void {
    this.getUltraTrails();
  }

  getUltraTrails() {
    this._consultaServicio.Read().subscribe({
      next : data => {
        data.forEach((valor : any) => {

          // Parsear fecha MySQL a objeto Date Javascript
          var fechaMysql : Date = new Date(Date.parse(valor.fecha)); 

          const opciones : any = {month: 'short', day: 'numeric'};

          // Obtener formato segun localizacion
          var fechaJS : string = fechaMysql.toLocaleDateString(`es-ES`,opciones);
          
          // Obtener solo distancia >= 40 km
          if (valor.distancia >= 40 ) {
            this.listaUltraTrail.push([valor.nombre,fechaJS,valor.distancia]);
          }
        });
      },
      error : error => {
        console.log(error);
      }
    });
  }


 

}
