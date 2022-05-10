import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { RegistroComponent } from './registro/registro.component';
import { ZonaSociosComponent } from './zona-socios/zona-socios.component';
import { MartxasComponent } from './martxas/martxas.component';
import { HomeComponent } from './home/home.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { PanelControlComponent } from './panel-control/panel-control.component';
import { UltratrailsComponent } from './ultratrails/ultratrails.component';
import { Routes } from '@angular/router';

export const appRoutes : Routes = [
    {path: "listado-mendi-martxas", component: MartxasComponent},
    {path: "", component: HomeComponent},
    {path: "calendario", component: CalendarioComponent},
    {path: "panel-de-control", component: PanelControlComponent},
    {path: "ultra-trails", component: UltratrailsComponent},
    {path: "zona-socios", component: ZonaSociosComponent},
    {path: "registro", component: RegistroComponent},
    {path: "update/:id", component: UpdateComponent},
    {path: "add-mendi-martxa", component: CreateComponent},
    {path: "**", component: HomeComponent}

];