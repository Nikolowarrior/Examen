import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.sass']
})
export class CarruselComponent implements OnInit {
 
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
 
  constructor() { }

  ngOnInit(): void {
  }

}