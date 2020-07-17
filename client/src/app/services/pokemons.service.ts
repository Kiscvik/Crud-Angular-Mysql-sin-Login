import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Pokemon} from '../models/Pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  getPokemons(){
    return this.http.get(`${this.API_URI}/pokemons`);
  }

  getPokemon(id: string): Observable <Pokemon>{
    return this.http.get<Pokemon>(`${this.API_URI}/pokemons/${id}`);
  }

  savePokemon(pokemon : Pokemon){
    return this.http.post(`${this.API_URI}/pokemons`,pokemon);
  }

  deletePokemon(id: string){
    return this.http.delete(`${this.API_URI}/pokemons/${id}`);
  }

  updatePokemon(id: string | number ,updatePokemon: Pokemon) {
    return this.http.put(`${this.API_URI}/pokemons/${id}`,updatePokemon);
  }
}
