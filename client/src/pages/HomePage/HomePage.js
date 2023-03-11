import React from 'react';

import { Grid, Paper, Box } from '@mui/material';
import { useQuery, gql } from '@apollo/client';
import { MovieCard } from '../../components/MovieCard';

const elevation = 6;

const GET_MOVIES = gql`
  query GetMovies {
    movies {
      page
      totalPages
      totalResults
      results {
        id
        title
        releaseDate
        posterPath
      }
    }
  }
`;

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const renderMovieCard = (movie) => (
    <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
      <MovieCard movie={movie} />
    </Grid>
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper elevation={elevation}>
          <div className="grid-elements">xs=6</div>
        </Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Grid container spacing={2}>
            {data?.movies?.results.map(renderMovieCard)}
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
};

export default HomePage;
