import { Component, OnInit } from '@angular/core';
import {PokemonsService} from '../../services/pokemons.service'

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  //Arreglo de pokemones inicial
  pokemons: any = [];

  constructor(private pokemonsService : PokemonsService) { }

  ngOnInit() {
    this.pokemonsService.getPokemons().subscribe(

      res => {
        this.pokemons = res;
      },
      err => console.error(err)

    );
  }

}
