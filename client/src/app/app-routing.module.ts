import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokeListComponent } from './components/poke-list/poke-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo:'/pokemons',
    pathMatch: 'full'

  },
  {
    path: 'pokemons',
    component: PokeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
