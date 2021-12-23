import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>Holaaa Agular</h1>
        <h2> {{ titulo }}</h2>

        <h3>La base es: <strong> {{ base }}</strong></h3>

        <button (click)="acumular( base )"> + {{ base }} </button>

        <span> {{ numero }} </span>

        <button (click)="acumular( -base )"> - {{ base }} </button>
    `
})
export class ContadorComponent{
    public titulo: string = 'bases AppComponent';
    public numero: number = 10;
    public base: number = 5;
  
    sumar(){
      this.numero += 1;
    }
  
    restar(){
      this.numero -= 1;
    }
  
    acumular( valor: number){
      this.numero += valor;
    }
  
    acumularBase( factorMult: number){
      this.numero = factorMult * this.base + this.numero;
    }
}