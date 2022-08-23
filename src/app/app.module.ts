import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {Primera} from './contador.component';
import { HeroesModule } from './Heroe/heroes.module';
import { Oso } from './Practica/Practica1/ejercicio.module';


@NgModule({
  declarations: [
    AppComponent,
    Primera
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    Oso
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
