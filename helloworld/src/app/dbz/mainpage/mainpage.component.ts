import { Component } from '@angular/core';

interface Personaje{
  nombre: string
  poder: number
}



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
  nombre: "Trunks",
  poder: 12000
}



agregar(){

  if (this.nuevo.nombre.trim().length === 0){
    return
  }
  this.personajes.push(this.nuevo)
  this.nuevo = {
    nombre: "",
    poder: 0
  }
}
}
