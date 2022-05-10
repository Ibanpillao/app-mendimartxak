import { MendiMartxa } from './../models/MendiMartxa';
import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../services/consultas.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-zona-socios',
  templateUrl: './zona-socios.component.html',
  styleUrls: ['./zona-socios.component.css'],
  providers: [ConsultasService]
})

export class ZonaSociosComponent implements OnInit {

  public martxa : Array<MendiMartxa> = [];
  public idMartxa : Array<Number> = [];

  constructor(private _ruta : ActivatedRoute, private _consultaServicio : ConsultasService,  private _router : Router) { }

  ngOnInit(): void {
    this.getAllMartxas();
  }

  getAllMartxas() : void {
    this._consultaServicio.Read().subscribe({
      next : data => {
          for (let i = 0; i < data.length; i++) {
            let fecha = this.parsearFecha(data[i].fecha);
           if (data[i].participantes == 0) data[i].participantes = null;
            this.idMartxa.push(data[i].idmartxas);
            this.martxa.push(new MendiMartxa( data[i].nombre, data[i].ciudad, data[i].distancia, fecha, data[i].participantes));
          }

          console.log(this.idMartxa)
    },
    error : error => {
      console.log(error);
    }
  });
}

private parsearFecha(fecha : any) : string{
  const fechaMysql = new Date(Date.parse(fecha)); 
  return fechaMysql.toLocaleDateString();
}

  borrarMartxa(boton:any) {
    let id : number = boton.target.value;
   
    this._consultaServicio.Delete(id).subscribe({
      next : data => {
        console.log(JSON.stringify(data.message));
        Swal.fire({
          position: 'center',
          width: 400,
          icon: 'success',
          title: `Martxa ${id} eliminada`,
          showConfirmButton: false,
          timer: 2000
        });
       setTimeout( 
          ()=>{ window.location.reload() },
          2200
          );
      },
      error : error => {
        console.log(error);
      }
    })

  }

  actualizarMartxa(boton:any) {
    let id : number = boton.target.value;
    this._router.navigate(['update/' + id]); 
  }

}
