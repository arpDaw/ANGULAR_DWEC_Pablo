import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ContadorComponent} from './contadores/contador.componente';
// import { HeroeComponent } from './heroes/heroe/heroe.component';
// import { ListaComponent } from './heroes/lista/lista.component';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
