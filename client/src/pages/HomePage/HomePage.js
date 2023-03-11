import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Grid, Paper } from '@mui/material';
import { MoviesList } from '../../components/MoviesList';
import { SelectedMoviesList } from '../../components/SelectedMoviesList';

import { POPULAR_MOVIES_QUERY } from '../../queries';
import { useSelectedMovies } from '../../hooks/useSelectedMovies';

const elevation = 6;

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useQuery(POPULAR_MOVIES_QUERY, {
    variables: { page: currentPage },
  });
  const { selectedMovies, add, remove } = useSelectedMovies();

  if (error) return <p>Error : {error.message}</p>;

  const paginationClickHandler = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper elevation={elevation}>
          <div className="grid-elements">xs=6</div>
        </Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <MoviesList
            movies={data?.popularMovies?.results}
            currentPage={currentPage}
            totalPages={data?.popularMovies?.totalPages}
            onPaginationClick={paginationClickHandler}
            onAddNewMovie={add}
            onRemoveNewMovie={remove}
          />
        )}
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={elevation}>
          <div className="grid-elements">
            <SelectedMoviesList
              movies={selectedMovies}
              onRemoveNewMovie={remove}
            />
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HomePage;
