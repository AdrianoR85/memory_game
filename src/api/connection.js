import axios from "axios";

const URLAPI =  'https://pokeapi.co/api/v2/pokemon'

const getPokemon = async () => {
  let pokemList = []

  try {
    for(let i = 1; i <= 12; i++) {
      const pokemUrl = `${URLAPI}/${i}`;
      const url = await axios.get(pokemUrl);

      const pokemon = {
        name: url.data.name,
        image: url.data.sprites.front_default,
        type: url.data.types[0].type.name,
      }

      pokemList.push(pokemon);
    }

    return pokemList;
  }
  catch (e) {
    console.error(e)
  }
}

export default getPokemon;