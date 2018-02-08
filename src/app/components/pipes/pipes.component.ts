import { Component } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  nombre = 'Antonela';
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  nPercent = 0.487;
  salario = 13500 ;
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverin',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: '19'
    }
  };

  valorDePromesa = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve('Llego la data!'), 3500);
  });

  date = new Date();

  nombres = 'antoNelA, mArtINa, RenAta';
}
