import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { PrimengModule } from './primeng/primeng.module';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';

import { PipesComponent } from './pipes/pipes.component';
import { CardComponent } from './card/card.component';
import { VentasModule } from './ventas/ventas.module';


import localeFR from '@angular/common/locales/fr'
import localeCAT from '@angular/common/locales/ca-ES-valencia'
import localeESP from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RippleModule } from 'primeng/ripple';

registerLocaleData(localeCAT);
registerLocaleData(localeFR);
registerLocaleData(localeESP);

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
    VentasModule,
    BrowserAnimationsModule,
    RippleModule

  ],
  providers: [{
    provide: LOCALE_ID, useValue:'ca-ES-valencia'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
