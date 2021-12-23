import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent{
  nombre: string = 'Iroman';// cuando no tiene puesto el modificador de acceso es 'public' por defecto
  edad: number = 45;

  get nombreCapitalizado(): string {
      return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
      return `${ this.nombre } - ${ this.edad }`;
  }

  cambiarNombre(): void {
      this.nombre = 'Spiderman';
  }

  cambiarEdad(): void {
      console.log("holaaa");
      this.edad = 30;
  }
}