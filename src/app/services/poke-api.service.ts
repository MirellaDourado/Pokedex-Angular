import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface pokeInterface {
  count: number,
  nex: any,
  previous: any,
  results: any
}

@Injectable({
  providedIn: 'root'
})

export class PokeApiService {
  private url = '//pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
  pokeList = [];
  
  constructor( private http: HttpClient) { }

  listAll() {
    this.http.get<pokeInterface>(`${this.url}`)
    .subscribe(
      response => {
       response.results.forEach( (poke: any) => poke.number = this.getNumberFromUrl(poke.url))
       return this.pokeList = response.results.filter((poke:any) => poke.number < 152)
      }
    )
  }

  private getNumberFromUrl(url: any) {
    return parseInt(url.replace(/.*\/(\d+)\/$/, '$1'))
  }

}
