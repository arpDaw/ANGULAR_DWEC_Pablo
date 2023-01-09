import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
  styleUrls: ['../../app.component.scss'],
})
export class HeroeComponent {
  // title = 'helloworld';
  title = 'heroeapp';

  nombre:string = 'Deadpool';
  edad:number = 32;

  obtenerNombre():string{

    return `${this.nombre}-${this.edad}`
  }

  get nombreMayus():string{
    return this.nombre.toUpperCase()
  }

  cambiarNombre():void{
    this.nombre = "Spidey"
  }

  cambiarEdad():void{
    this.edad = 23
  }
}