import { Component, Input } from '@angular/core';
import {Personaje} from   '../interfaces/dbz.interfaces'
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent {

  //  @Input() personajes:Personaje[] = [];
  //  @Input() nuevo:Personaje[] = [];
  get personajes(){
    return this.DbzService.personajes
  }

  constructor(private DbzService: DbzService){
    
  }

}
