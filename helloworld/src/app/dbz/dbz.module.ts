import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainpageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainpageComponent
  ]
})
export class DbzModule { }
