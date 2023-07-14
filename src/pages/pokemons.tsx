import { Grid, Box } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar_pokemon from '../components/Navbar_pokemon'
import BasicModal from '../components/BasicModal'; 

interface Pokemon {
  name: string;
  url: string;
}

export default function Pokemons() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const getPokemons = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .then((res) => setPokemons(res.data.results))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getPokemons();
  }, []);

  const pokemonFilter = (name: string):void => {
    if (name === '') {
      getPokemons();
    }
    let filteredPokemons: Pokemon[] = [];
    for (let i in pokemons) {
      if (pokemons[i].name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }
    setPokemons(filteredPokemons);
  }

  return (
    <Box>
      <Navbar_pokemon pokemonFilter={pokemonFilter} />
      <Grid container spacing={4} sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
        {pokemons.map((pokemon: Pokemon, key: number) => (
          <Grid item lg={1.6} md={3} sm={4} key={key}>
            <BasicModal pokemon={pokemon} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
