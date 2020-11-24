import { Controller, Get, Param } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { Pokemons } from './../pokemons';
import { Pokemon } from './../pokemon';

@Controller('pokemons')
export class PokemonsController {
    constructor(private readonly pokemonsService: PokemonsService) {}

    @Get()
    async pokemonsIndex(): Promise<Pokemons> {
        return this.pokemonsService.findAllPokemons();
    }

    @Get(':id')
    async pokemonDetails(@Param('id') id: number): Promise<Pokemon> {
        return this.pokemonsService.findPokemon(id);
    }
}
