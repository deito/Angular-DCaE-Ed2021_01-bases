import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService {

  // es un estandar poner el caracter '_' al inicio del nomre de una propiedad, para indicar que es 'private'?
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  get personajes(): Personaje[]{
    return [...this._personajes];
  }

  constructor(){
    console.log('Servicio DbzService inicializado');
  }

  agregarPersonaje( personaje: Personaje){
    this._personajes.push( personaje );
  }
}