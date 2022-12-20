import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `<h1>{{ title }}</h1>

  <button (click)="operar('suma')" type="button">+{{ base }}</button>
  <span>{{ number }}</span>
  <button (click)="operar('resta')" type="button">-{{ base }}</button>`,
})
export class ContadorComponent {
  // title = 'helloworld';
  title = 'contadorapp';
  number = 10;
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