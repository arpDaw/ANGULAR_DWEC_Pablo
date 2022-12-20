import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'helloworld';
  title = 'contadorapp';
  number = 10;
  operacion = "";
  base = 5;

  operar(operacion:string) {

    if(operacion == "suma"){
    this.number += this.base;
    return this.number;
    }else{
      this.number -= this.base;
      return this.number;
    }
  }

}
