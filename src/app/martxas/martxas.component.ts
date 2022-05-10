import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../services/consultas.service';
import { MendiMartxa } from '../models/MendiMartxa';

@Component({
  selector: 'app-martxas',
  templateUrl: './martxas.component.html',
  styleUrls: ['./martxas.component.css'],
  providers: [ConsultasService]
})
export class MartxasComponent implements OnInit {

  public listaMartxas : Array<MendiMartxa> = [];

  constructor(private _consultaServicio : ConsultasService) { }

  ngOnInit(): void {
    this.getMartxas();
  }

  getMartxas() {
    this._consultaServicio.Read().subscribe({
      next : data => {
        data.forEach((valor : any) => {

          // Parsear fecha MySQL a objeto Date Javascript
          var fechaMysql = new Date(Date.parse(valor.fecha)); 

          // Obtener formato segun localizacion
          var fechaJS = fechaMysql.toLocaleDateString();

          if (valor.participantes == null) valor.participantes = "-";

          this.listaMartxas.push(new MendiMartxa(valor.nombre,valor.ciudad, valor.distancia, fechaJS, valor.participantes));
        });
          
        console.log("Read: " + this.listaMartxas);
      },
      error : error => {
        console.log(error);
      }
    });
  }

}
