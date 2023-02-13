import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { PrimengModule } from './primeng/primeng.module';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';

import { PipesComponent } from './pipes/pipes.component';
import { CardComponent } from './card/card.component';
import { VentasModule } from './ventas/ventas.module';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    PrimengModule,
    SharedModule,
    AppRouterModule,
    VentasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
