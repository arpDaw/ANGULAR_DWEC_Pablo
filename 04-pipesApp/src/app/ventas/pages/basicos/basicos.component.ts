import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {
  nombreLower: string = "emil"
  nombreUpper: string = "EMIL"
  nombreCompleto: string = "eMiL WeAPOn nº6"

  fecha: Date = new Date();
}
