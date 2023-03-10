import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ContadorComponent} from './contadores/contador.componente';
// import { HeroeComponent } from './heroes/heroe/heroe.component';
// import { ListaComponent } from './heroes/lista/lista.component';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';
import { DbzService } from './dbz/services/dbz.service';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    DbzModule
  ],
  providers: [DbzService],
  bootstrap: [AppComponent]
})
export class AppModule { }
