import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  personas = [
    {nombre: 'Pablo', genero: 'm'},
    {nombre: 'Montse', genero: 'f'}
  ]

  iPersona = 0
 inviteMap: any = {'m': 'invitarlo', 'f':'invitarla'}
  cambiarPersona(){
    this.iPersona++
    if(this.iPersona > this.personas.length-1){
      this.iPersona = 0
    }
  }

  quitarCliente(){

  }
 

  clientes: string[] = ['Maria']
  clientesMap: any = {'=0': 'no tenemos clientes', '=1': 'tenemos un cliente', '=2': 'tenemos dos clientes', 'other': 'clientes'}

  clientes2: string[] =['María', 'Paco']
  clientes2Map: any = {'=0': 'ningún', '=1': 'cliente', '=2': 'tenemos dos clientes'}

  clientes3: string[] =[]
  clientes3Map: any = {'=0': 'no tenemos clientes', '=1': 'cliente', 'other': 'clientes'}

  clientes4: string[] =['María', 'Paco','a', 'b','c','d']
  clientes4Map: any = {'=0': 'no tenemos clientes', '=1': 'cliente', 'other': 'clientes'}

  
  constructor(private primengConfig: PrimeNGConfig){}
ngOnInit(){
  this.primengConfig.ripple = true;
}
}

