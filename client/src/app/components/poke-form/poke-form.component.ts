import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


import { Pokemon } from 'src/app/models/Pokemon';
import {PokemonsService} from '../../services/pokemons.service';

@Component({
  selector: 'app-poke-form',
  templateUrl: './poke-form.component.html',
  styleUrls: ['./poke-form.component.css']
})
export class PokeFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  pokemon:Pokemon = {

    id: 0,
    title: '',
    description: '',
    image:'',
    created_at: new Date()

  };

  edit : boolean = false;

  constructor(private pokemonService: PokemonsService , private router : Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if(params.id){
      this.pokemonService.getPokemon(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.pokemon = res;
          this.edit = true;
        },
        err=> console.error(err)
      )
    }
  }

  saveNewPokemon(){
    delete this.pokemon.created_at;
    delete this.pokemon.id;

    this.pokemonService.savePokemon(this.pokemon)
    .subscribe(
    res => {
      console.log(res);
      this.router.navigate(['/pokemons']);
    },
    err => console.error(err)
    )
  }
  updatePokemon(){
    delete this.pokemon.created_at;
    this.pokemonService.updatePokemon(this.pokemon.id, this.pokemon)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/pokemons']);
      },
      err => console.error(err)
    )
  }

}
