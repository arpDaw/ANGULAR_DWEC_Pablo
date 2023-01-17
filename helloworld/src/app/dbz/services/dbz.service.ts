import {Injectable} from "@angular/core"
import {Personaje} from   '../interfaces/dbz.interfaces'

@Injectable()
export class DbzService {
    _personajes: Personaje[] = [
        {nombre:'Goku', poder:20000},
        {nombre:'Vegeta', poder:10000},
        {nombre:'Krillin', poder:8000},
        {nombre:'Satán', poder:5}
      ]

      get personajes():Personaje[]{
        return [...this._personajes]
      }

      agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje)
      }
      


    constructor(){
        console.log("Servicio Inicializado")
    }
}