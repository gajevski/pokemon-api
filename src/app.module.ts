import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { PokemonsService } from './pokemons/pokemons.service';
import { PokemonsController } from './pokemons/pokemons.controller';

@Module({
  imports: [PokemonModule],
  controllers: [PokemonsController],
  providers: [PokemonsService],
})
export class AppModule {}
