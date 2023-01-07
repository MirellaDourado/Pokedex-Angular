import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchPokemonService {

  constructor() { }

  pokeList(pokeList:any, nameFilter:string) {
    return pokeList.filter( (pokemon:any) => pokemon.name.toLowerCase().indexOf(nameFilter.toLowerCase()) !== -1)
  }
}
