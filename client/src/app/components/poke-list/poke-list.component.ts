import { Component, OnInit, HostBinding } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service'

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  //Arreglo de pokemones inicial
  pokemons: any = [];

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit() {
    this.getPokemons()
  }

  getPokemons(){
    this.pokemonsService.getPokemons().subscribe(

      res => {
        this.pokemons = res;
      },
      err => console.error(err)
    );
  }

  deletePokemon(id: string) {
    this.pokemonsService.deletePokemon(id).subscribe(
    res => {
      console.log(res)
      this.getPokemons()
    },
    err => console.log(err)
    )
  }
}

