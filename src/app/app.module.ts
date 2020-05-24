import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DivisasComponent } from './components/divisas/divisas.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { CovidComponent } from './components/covid/covid.component';

@NgModule({
  declarations: [
    AppComponent,
    DivisasComponent,
    NoticiasComponent,
    HoroscopoComponent,
    CovidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
