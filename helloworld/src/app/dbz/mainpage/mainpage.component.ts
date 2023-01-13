import { Component, Input } from '@angular/core';
import {Personaje} from   '../interfaces/dbz.interfaces'



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


}
