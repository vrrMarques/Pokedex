import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Link from 'next/link';

export default function Navbar_home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background:"black"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, }}>
          <img src="/images/logo.png" alt="logo" className='logo'/>

          </Typography>
          <ButtonBase color="inherit">
            <Link href="https://github.com/vrrmarques">Sobre</Link>
            </ButtonBase>
        </Toolbar>
      </AppBar>
    </Box>
  );
}