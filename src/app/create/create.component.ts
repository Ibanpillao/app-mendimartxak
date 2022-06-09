import { Component, OnInit } from '@angular/core';
import { ConsultasService } from './../services/consultas.service';
import { ActivatedRoute } from '@angular/router';
import { MendiMartxa } from '../models/MendiMartxa';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public martxa : MendiMartxa;
  public nombre : string = '';
  public ciudad : string = '';
  public distancia : number = 0;
  public fecha : string = '';
  public participantes = 0;

  constructor(private _consulta : ConsultasService, private _ruta : Router) { 
    this.martxa = new MendiMartxa('','',0,'',0);
  }

  ngOnInit(): void {
   
  }

  onSubmit() {
    if (this.nombre == '' || this.ciudad == '' || this.distancia == null || this.fecha == '') {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Hay algún campo vacío. Revísalo',
        showConfirmButton: true,
      }) 
      return;
    } else {

      this.martxa.setNombre(this.nombre);
      this.martxa.setCiudad(this.ciudad);
      this.martxa.setDistancia(this.distancia);
      this.martxa.setFecha(this.fecha);
      this.martxa.setParticipantes(this.participantes);

      this.addMartxa(this.martxa);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Martxa añadida!',
          showConfirmButton: true,
        }).then( (result)=>{
          if (result.isConfirmed) {
            this._ruta.navigate(['/panel-de-control'])
          }
        })
    }
  }

  private addMartxa(martxa : any) : void {
      this._consulta.Create(this.martxa).subscribe({
        next : data => {
          console.log(data);
        },
        error : error => {
        }
      })
  }
}
