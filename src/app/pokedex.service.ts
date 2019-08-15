import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private pokeApi = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemonList() {
    return this.http.get(this.pokeApi + '/pokemon?limit=151');
  }

  getPokemonDetail(name: string) {
    return this.http.get(this.pokeApi + '/pokemon/' + name);
  }
}
