import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokeListComponent } from './components/poke-list/poke-list.component';
import { PokeFormComponent} from './components/poke-form/poke-form.component';
import { PokemonsService } from './services/pokemons.service';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/pokemons',
    pathMatch: 'full'

  },
  {
    path: 'pokemons',
    component: PokeListComponent
  }, 
  {
    path:'pokemons/add',
    component: PokeFormComponent

  },
  {
    path:'pokemons/edit/:id',
    component:PokeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
