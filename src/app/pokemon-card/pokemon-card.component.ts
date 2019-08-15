import {Component, Input, OnInit} from '@angular/core';
import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemonName: string;
  pokemonInfo: any;

  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
    this.pokedexService.getPokemonDetail(this.pokemonName)
      .subscribe(
        (data) => {
          this.pokemonInfo = data;
        }, (error) => {
          console.error(error);
        });
  }

}
