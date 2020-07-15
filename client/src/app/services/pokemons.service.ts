import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Pokemon} from '../models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  getPokemons(){
    return this.http.get(`${this.API_URI}/pokemons`);
  }

  getPokemon(id: string){
    return this.http.get(`${this.API_URI}/pokemons/${id}`);
  }

  savePokemon(pokemon : Pokemon){
    return this.http.post(`${this.API_URI}/pokemons`,pokemon);
  }

  deletePokemon(id: string){
    return this.http.delete(`${this.API_URI}/pokemons/${id}`);
  }

  updatePokemon(id: string ,updatePokemon: Pokemon) {
    return this.http.put(`${this.API_URI}/pokemons/${id}`,updatePokemon);
  }
}
