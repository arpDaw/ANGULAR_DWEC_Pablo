import { Component } from '@angular/core';


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  nombre: string = "v HAs ComE TO"
  valor: number = 9
  obj = {
    nombre: "Venom Snake"
  }

  mostrarNombre(){
    console.log(this.nombre)
    console.log(this.valor)
    console.log(this.obj)
  }
}

