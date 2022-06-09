import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../services/consultas.service';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-panel-control',
  templateUrl: './panel-control.component.html',
  styleUrls: ['./panel-control.component.css'],
  providers: [ConsultasService,UsuariosService]
})
export class PanelControlComponent implements OnInit {

  public user : Usuario;
  public nombre : string = '';
  public password : string = '';
  public localStorage : any = localStorage;


  constructor(private _userService : UsuariosService, private _consultaServicio : ConsultasService, private _router : Router) {
    this.user = new Usuario('','');
   }

  ngOnInit(): void {
    console.log('Datos LocalStorage: ' + this.localStorage.getItem('login'));

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

      let userLogin = {
        nombre : this.user.getNombre(),
        password : this.user.getPassword()
      }
      this.loginUser(userLogin);
  }
  }

  loginUser(user : any) : void {

    this._userService.LoginUser(user).subscribe({
      next : data => {
        console.log(JSON.stringify(data.message));
        if (data.success == true) {
          this._router.navigate(['panel-de-control']);
          this.localStorage.setItem('login',JSON.stringify(user));
          this.localStorage.setItem('token',JSON.stringify(data.token));
          console.log(this.localStorage.getItem('login'));

        } else {
            Swal.fire({
            position: 'center',
            icon: 'error',
            title: data.message,
            showConfirmButton: true,
          })
        }
      },
      error : error => {
        console.log(error);
      }
    });

    this.nombre = '';
    this.password = '';
  }

  read() : void {
    this._consultaServicio.Read().subscribe({
      next : data => {
        let array : Array<any> = [];
        data.forEach((valor : any) => {
          array.push(valor.nombre);
        });
          
        console.log("Read: " + array);
      },
      error : error => {
        console.log(error);
      }
    });

  }

}
