import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';



@NgModule({
  declarations: [
    MainpageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [DbzService],
  exports:[
    MainpageComponent
  ]
})
export class DbzModule { }
