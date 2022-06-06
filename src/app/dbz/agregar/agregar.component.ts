import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input('nuevoAgregar')
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // @Output()
  // onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  constructor(private dbzService: DbzService){}

  agregar(){
    if( this.nuevo.nombre.trim().length === 0){
      return;
    }
    console.log( this.nuevo );
    // this.onNuevoPersonaje.emit( this.nuevo );

    // this.personajes.push({
    //   nombre: this.nuevo.nombre,
    //   poder: this.nuevo.poder
    // });

    this.dbzService.agregarPersonaje( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }

}
