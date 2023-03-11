import React from 'react';

import { Grid, Paper } from '@mui/material';
import { MoviesList } from '../../components/MoviesList';

const elevation = 6;

const HomePage = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Paper elevation={elevation}>
        <div className="grid-elements">xs=6</div>
      </Paper>
    </Grid>
    <Grid item xs={12} md={8}>
      <MoviesList />
    </Grid>
    <Grid item xs={12} md={4}>
      <Paper elevation={elevation}>
        <div className="grid-elements">xs=4</div>
      </Paper>
    </Grid>
  </Grid>
);

export default HomePage;
