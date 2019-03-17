import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './app/home/home.component';
import { EventosComponent } from './app/eventos/eventos.component';
import { ContatoComponent } from './app/contato/contato.component';
import { QuemSomosComponent } from './app/quem-somos/quem-somos.component';
import { FooterComponent } from './app/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventosComponent,
    ContatoComponent,
    QuemSomosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
