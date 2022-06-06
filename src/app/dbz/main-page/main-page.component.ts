import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  // get personajes(): Personaje[]{
  //   return this.dbzService.personajes;
  // }

  // agregarNuevoPersonaje(argumento: Personaje){
  //   console.log('Main page component');
  //   //console.log( argumento );
  //   console.log('Antes del push');
  //   this.personajes.push( argumento );
  //   console.log('Despues del push');
  // }

  constructor(private dbzService: DbzService){
    this.dbzService.personajes;
  }

}
