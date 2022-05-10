import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-mendimartxak';
  public localStorage : any = localStorage;
  public nombre : any;

  constructor(private _route : Router) {}

  getNombre() : string {
    this.nombre = JSON.parse(this.localStorage.getItem('login'));
    return this.nombre.nombre;
  }

  goToPanel() {
    this._route.navigate(['panel-de-control']);
  }
}
