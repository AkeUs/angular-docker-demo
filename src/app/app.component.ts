import { Component, OnInit } from '@angular/core';
import { PokedexService } from './pokedex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PokeDex';
  pokemonList: any[] = [];

  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
    this.pokedexService.getPokemonList()
      .subscribe(
        (data) => {
          this.pokemonList = data['results'];
        },
        (error) => {
          console.error(error);
        }
      );
  }

  ordenarLista() {

  }

}
