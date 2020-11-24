import { Injectable } from '@nestjs/common';
import { Pokemons } from './../pokemons';
import { Pokemon } from './../pokemon';

@Injectable()
export class PokemonsService {
    private readonly pokemons: Pokemons = [
        {
            id: 0,
            title: "Pikachu",
            description: "Pikachu is a short, chubby rodent Pokémon. It is covered in yellow fur with two horizontal brown stripes on its back. It has a small mouth, long, pointed ears with black tips, and brown eyes",
            type: "Electric",
            cover: "https://i.pinimg.com/originals/f5/1d/08/f51d08be05919290355ac004cdd5c2d6.png"
        },
        {
            id: 1,
            title: "Gengar",
            description: "Gengar is a dark purple, bipedal Pokémon with a roundish body. It has red eyes, a wide mouth that is usually curled into a sinister grin, and pointed ears.",
            type: "Shadow",
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQddoRlkiInMVB2M_pQb73ONWOtW3pM5Mh4gw&usqp=CAU"
        },
        {
            id: 2,
            title: "Charizard",
            description: "Charizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from the chest to the tip of its tail. It has a long neck, small blue eyes, slightly raised nostrils, and two horn-like structures protruding from the back of its rectangular head. ",
            type: "Fire",
            cover: "https://upload.wikimedia.org/wikipedia/en/1/1f/Pok%C3%A9mon_Charizard_art.png"
        },
    ];

    // Return list of all pokemons
    findAllPokemons(): Pokemons {
        return this.pokemons;
    }

    // Return details of specific pokemon
    findPokemon(id: number): Pokemon {
        const pokemon: Pokemon = this.pokemons[id];
        if (!pokemon) throw new Error('Pokemon not found');
        return pokemon;
    }
}
