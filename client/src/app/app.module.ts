import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PokeFormComponent } from './components/poke-form/poke-form.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';

import { PokemonsService } from './services/pokemons.service'


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PokeFormComponent,
    PokeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PokemonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
