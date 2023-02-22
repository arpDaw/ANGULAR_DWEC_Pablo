import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

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
    this.clientes.shift()

  }
  persona = {
    Nombre: 'Toni',
    Edad: 36,
    Direccion: 'Tavernes de la Valldigna'
  }
 
  clientes: string[] = ['Carmen', 'Emilio','Pablo', 'Alex','Guille','Pau']
  clientesMap: any = {'=0': 'no tenemos clientes', 'other': 'tenemos # clientes'}

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  miObservable = interval(1000)

  valorPromesa = new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa')
    },3500)
  })

  
  constructor(private primengConfig: PrimeNGConfig){}
ngOnInit(){
  this.primengConfig.ripple = true;
}
}

