import React from 'react';

import { Grid, Paper, Box } from '@mui/material';
import { MovieCard } from '../../components/MovieCard';

const elevation = 6;

const HomePage = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Paper elevation={elevation}>
        <div className="grid-elements">xs=6</div>
      </Paper>
    </Grid>
    <Grid item xs={12} md={8}>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <MovieCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <MovieCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <MovieCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <MovieCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <MovieCard />
          </Grid>
        </Grid>
      </Box>
    </Grid>
    <Grid item xs={12} md={4}>
      <Paper elevation={elevation}>
        <div className="grid-elements">xs=4</div>
      </Paper>
    </Grid>
  </Grid>
);

export default HomePage;
