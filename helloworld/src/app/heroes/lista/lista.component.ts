import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {

  heroes:string[] = ['Thor', 'Spiderman', 'Superman', 'Hulk', 'Capitan America']

  borrado = ""

  borrarHeroe():void{
    this.borrado = this.heroes[0]
    this.heroes.shift()
  }
}
