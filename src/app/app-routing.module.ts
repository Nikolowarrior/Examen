import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { ListalibrosComponent } from './listalibros/listalibros.component';


const routes: Routes = [
  { path: '', component: CarruselComponent },
  { path: 'libros', component: ListalibrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }