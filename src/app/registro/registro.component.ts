import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../services/consultas.service';
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public nombre : string = '';
  public password : string = '';
  public localStorage : any = localStorage;
  public user : Usuario;


  constructor(private _consultaServicio : ConsultasService, private _router : Router) { 
    this.user = new Usuario('','');
  }

  ngOnInit(): void {
  }

  onSubmit() : void {

    if (this.nombre == '' || this.password == '') {
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Hay algún campo vacío!',
        showConfirmButton: true,
        timer: 1500
      })
    } else {
      this.user.setNombre(this.nombre);
      this.user.setPassword(this.password);

      let nuevoUsuario = {
        nombre : this.user.getNombre(),
        password : this.user.getPassword()
      }

      this.registroUser(nuevoUsuario);
    }
  }


  private registroUser(user : any) : void {

    this._consultaServicio.RegistroUser(user).subscribe({
      next : data => {
        console.log(JSON.stringify(data.message));
        if (data.success == true) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario registrado correctamente!',
            timer: 1500
          })
          setTimeout( ()=> {
            this._router.navigate(['panel-de-control']);
          }, 2000);
        } else Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'El usuario ya está registrado!',
          showConfirmButton: true,
        })
      },
      error : error => {
        console.log(JSON.stringify(error.message));
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Hubo algún error, inténtelo otra vez!',
          showConfirmButton: true,
          timer: 1500
        })
      }
    });

    this.nombre = '';
    this.password = '';
  }

}
