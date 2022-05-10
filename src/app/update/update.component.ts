import { ConsultasService } from './../services/consultas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MendiMartxa } from '../models/MendiMartxa';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  public martxa : MendiMartxa;
  public id : any = null;
  public nombre : string = '';
  public ciudad : string = '';
  public distancia : number = -1;
  public fecha : any;
  public participantes : any;

  constructor(private _consulta : ConsultasService, private _route : ActivatedRoute) {
    console.log(_route.snapshot.paramMap.get('id'));
    this.id = this._route.snapshot.paramMap.get('id');
    this.martxa = new MendiMartxa('','',0,'',0);
   }

  ngOnInit(): void {
    this.getMartxa();
  }

  private getMartxa() {
    this._consulta.ReadOne(this.id).subscribe({
      next : data => {
        this.asignarCampos(data);
      },
      error : error => {
        console.log(error);
      }
    })
  }

  private asignarCampos(data : any) {
    this.martxa.setNombre(data[0].nombre);
    this.nombre = this.martxa.getNombre();
    this.martxa.setCiudad(data[0].ciudad);
    this.ciudad = this.martxa.getCiudad();
    this.martxa.setDistancia(data[0].distancia);
    this.distancia = this.martxa.getDistancia();
    this.martxa.setFecha(data[0].fecha);
    this.fecha = this.martxa.getFecha();
    this.martxa.setParticipantes(data[0].participantes);
    if (this.martxa.getParticipantes() == 0) this.participantes = null;
    this.participantes = this.martxa.getParticipantes();
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
  
        this.actualizarMartxa(this.martxa);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Martxa añadida!',
            showConfirmButton: true,
            timer: 1500
          })
      }
    }

  private actualizarMartxa(martxa : any) : void{
    let martxaAct = {
      nombre : martxa.getNombre(),
      ciudad : martxa.getCiudad(),
      distancia : martxa.getDistancia(),
      fecha : martxa.getFecha(),
      participantes : martxa.getParticipantes()
    }

        this._consulta.Update(this.id,martxaAct).subscribe({
      next : data => {
        console.log(data.message);
      },
      error : error => {
        console.log(error)
      }
    })
  }

}
