import { Component, Input } from '@angular/core';
import {Personaje} from   '../interfaces/dbz.interfaces'
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent {


personajes: Personaje[] = [
  {nombre:'Goku', poder:20000},
  {nombre:'Vegeta', poder:10000},
  {nombre:'Krillin', poder:8000},
  {nombre:'Satán', poder:5}
]

nuevo: Personaje = {
  nombre:"Genio Tortuga",
  poder: 1000
}

agregarNuevoPersonaje(argumento: Personaje){
  // console.log('Main page component')
  // console.log(argumento)
  this.personajes.push(argumento)
}

constructor(private dbzService: DbzService){}
}
