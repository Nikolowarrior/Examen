import { Component } from '@angular/core';
import { ListalibrosComponent } from './listalibros/listalibros.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'nickontrol';
  images = [
    {path: 'assets/images/poster01.jpg'},
    {path: 'assets/images/poster02.jpg'},
    {path: 'assets/images/poster03.jpg'},
    {path: 'assets/images/poster04.jpg'},
    {path: 'assets/images/poster05.jpg'},
    {path: 'assets/images/poster06.jpg'},
    {path: 'assets/images/poster07.jpg'},
    {path: 'assets/images/poster08.jpg'},
    {path: 'assets/images/poster09.jpg'},
    {path: 'assets/images/poster10.jpg'},
    {path: 'assets/images/poster11.jpg'}
  ];
  libros = (new ListalibrosComponent).lista;
}
