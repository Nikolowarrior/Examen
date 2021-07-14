import { Component, OnInit } from '@angular/core';
import { ILibro } from '../libro';

@Component({
  selector: 'app-listalibros',
  templateUrl: './listalibros.component.html',
  styleUrls: ['./listalibros.component.sass']
})
export class ListalibrosComponent implements OnInit {

  lista: ILibro[] = [
    {
      nombre: 'Harry Potter y la piedra filosofal',
      imagen: 'assets/portadas/harry.jpg',
      paginas: 288,
      autor: 'J.K. Rowling'
    },
    {
      nombre: 'Las cronicas de Narnia: La última batalla',
      imagen: 'assets/portadas/narnia.jpg',
      paginas: 240,
      autor: 'C.S. Lewis'
    },
    {
      nombre: 'Don Quijote de la Mancha',
      imagen: 'assets/portadas/quijote.jpg',
      paginas: 220,
      autor: 'Miguel de Cervantes'
    },
    {
      nombre: 'Choques de Reyes: Canción de hielo y fuego II',
      imagen: 'assets/portadas/reyes.jpg',
      paginas: 928,
      autor: 'George R.R Martin'
    },
    {
      nombre: 'La vuelta al mundo en 80 días',
      imagen: 'assets/portadas/vuelta.jpg',
      paginas: 80,
      autor: 'Julio Verne'
    },
    {
      nombre: 'Lautaro, joven libertador de Arauco',
      imagen: 'assets/portadas/lautaro.jpg',
      paginas: 160,
      autor: 'Fernando Alegría'
    },
    {
      nombre: 'Papelucho historiador',
      imagen: 'assets/portadas/papelucho.jpg',
      paginas: 104,
      autor: 'Marcela Paz'
    },
    {
      nombre: 'La metamorfosis y otros relatos',
      imagen: 'assets/portadas/metamorfosis.jpg',
      paginas: 114,
      autor: 'Franz Kafka'
    },
    {
      nombre: 'El gran gigante bonachón',
      imagen: 'assets/portadas/gigante.jpg',
      paginas: 180,
      autor: 'Roald Dahl'
    },
    {
      nombre: 'El Diario de Ana Frank',
      imagen: 'assets/portadas/frank.jpg',
      paginas: 320,
      autor: 'Ana Frank'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
