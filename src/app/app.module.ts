import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { ListalibrosComponent } from './listalibros/listalibros.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { QuejaComponent } from './queja/queja.component';


@NgModule({
  declarations: [
    AppComponent,
    ListalibrosComponent,
    CarruselComponent,
    QuejaComponent
  ],
  imports: [
    IvyCarouselModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
