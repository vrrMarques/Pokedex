import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { Typography } from '@mui/material';

export default function Pokebotao() {
  return (
    <Stack spacing={2} direction="row" sx={{display:"flex", justifyContent:"center", marginTop:"10%"}}>
      <Button variant="contained" sx={{backgroundColor:"red",width:"40%",height:"5rem",borderRadius:"100px"}}>
        <Link href="pokemons">
          <Typography variant="h5">
          Todos Pokemons
          </Typography>
          </Link>
        </Button>
    </Stack>
  );
}