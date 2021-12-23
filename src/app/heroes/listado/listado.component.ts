import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk',' Thor','Capitán América'];
  heroeBorrado: string = '';

  borrarHeroe(){
    console.log('borrando ...');
    //this.heroes.splice(2, 1);
    const heroeBorrado = this.heroes.shift();
    //this.heroeBorrado = heroeBorrado ? heroeBorrado : '';
    this.heroeBorrado = heroeBorrado || '';
    console.log(heroeBorrado);
  }
}
