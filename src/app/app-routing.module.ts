import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './app/home/home.component';
import { QuemSomosComponent } from './app/quem-somos/quem-somos.component';
import { ContatoComponent } from './app/contato/contato.component';
import { EventosComponent } from './app/eventos/eventos.component';


const routes: Routes = [
  {path: 'quemsomos', component: QuemSomosComponent},
  {path: 'eventos', component: EventosComponent},
  {path: 'contato', component: ContatoComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
