import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MartxasComponent } from './martxas/martxas.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { UltratrailsComponent } from './ultratrails/ultratrails.component';
import { PanelControlComponent } from './panel-control/panel-control.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ZonaSociosComponent } from './zona-socios/zona-socios.component';
import { RegistroComponent } from './registro/registro.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MartxasComponent,
    CalendarioComponent,
    UltratrailsComponent,
    PanelControlComponent,
    ZonaSociosComponent,
    RegistroComponent,
    UpdateComponent,
    CreateComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
