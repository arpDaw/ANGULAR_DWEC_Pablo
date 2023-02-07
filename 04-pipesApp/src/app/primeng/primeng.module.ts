import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {Card, CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule
  ],
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule
  ]
})
export class PrimengModule { }
