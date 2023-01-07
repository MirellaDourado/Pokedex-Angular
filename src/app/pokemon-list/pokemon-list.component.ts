import { Component } from '@angular/core';
import { PokeApiService } from '../services/poke-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  selectedPokemon = null;
  nameFilter= '';
  
  get pokemonList() {
    return this.pokeApi.pokeList.filter( (pokemon:any) => pokemon.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1)
  }

  constructor(
    private pokeApi: PokeApiService,
  ){}

  ngOnInit(){
    this.pokeApi.listAll()
  }

  get pkmSprite() {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.selectedPokemon}.png`
  }

  selectPokemon(pokemon: any) {
    this.selectedPokemon = pokemon['number'];
  }
}
