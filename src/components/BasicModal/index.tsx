import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Pokemon {
  name: string;
}

interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface Type {
  type: {
    name: string;
  };
}

interface Ability {
  ability: {
    name: string;
  };
}

interface PokemonDetails {
  stats?: Stat[];
  types?: Type[];
  abilities?: Ability[];
  sprites?: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}

interface BasicModalProps {
  pokemon: Pokemon;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#911616',
  border: '10px solid #000',
  boxShadow: 24,
};

export default function BasicModal({ pokemon }: BasicModalProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  console.log(pokemon, 'pokemon');

  const handleClose = () => setOpen(false);
  const [details, setDetails] = useState<PokemonDetails>({});

  const getOnePokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      .then((res) => setDetails(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getOnePokemon();
  }, [open]);

  return (
    <div>
      <Button onClick={handleOpen} sx={{ backgroundColor: "red", color: "white", width: "80%" }} size="large">
        <Typography variant='subtitle1'>
          {pokemon.name}
        </Typography>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ color: "white" }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2" sx={{ display: 'flex', justifyContent: 'center', textTransform: "uppercase", marginTop: "20px" }}>
            {pokemon.name}
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 1, display: "inline-block", marginLeft: "15%", fontFamily: "American Typewriter, serif", letterSpacing: "2px", textAlign: "center" }}>
            {details.stats && details.stats.map((stats: Stat, key: number) => {
              return (
                <div key={key}>
                  <span>{stats.stat.name}: </span>
                  <span className='tittle'>{stats.base_stat}</span>
                </div>
              )
            })}
            <br />
            {details.types && details.types.map((types: Type, key: number) => {
              return (
                <div key={key}>
                  <div>
                    <span>tipo: </span>
                    <span className='tittle'>{types.type.name}</span>
                  </div>

                </div>
              )
            })}
            <br />

            {details.abilities && details.abilities.map((abilities: Ability, key: number) => {
              return (
                <div key={key}>
                  <span>{abilities.ability.name}</span>
                  <br />
                </div>
              )
            })}
            <br />


          </Typography>
          <img src={details.sprites && details.sprites.other.dream_world.front_default} alt={pokemon.name} className='pokeImg' />
        </Box>
      </Modal>
    </div>
  );
}
