import React from 'react';
import { Outlet } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

import { Header } from '../../components/Header';

const RootRoute = () => (
  <div className="content">
    <Header />
    <Box
      component="main"
      sx={{
        p: 3,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar />
        <Outlet />
      </Container>
    </Box>
    <footer>footer</footer>
  </div>
);

export default RootRoute;
