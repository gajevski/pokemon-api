import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { PokemonsService } from './pokemons/pokemons.service';

@Module({
  imports: [PokemonModule],
  controllers: [],
  providers: [PokemonsService],
})
export class AppModule {}
