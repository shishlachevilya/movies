import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Box, Grid, Pagination } from '@mui/material';

import { MovieCard } from '../MovieCard';
import { POPULAR_MOVIES_QUERY } from '../../queries';

const MoviesList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { loading, error, data } = useQuery(POPULAR_MOVIES_QUERY, {
    variables: { page: currentPage },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const paginationClickHandler = (event, page) => {
    setCurrentPage(page);
  };

  const renderMovieCard = (movie) => (
    <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
      <MovieCard movie={movie} />
    </Grid>
  );

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Grid container spacing={2}>
        {data?.popularMovies?.results.map(renderMovieCard)}
      </Grid>

      <Box sx={{ mt: '30px', display: 'flex', justifyContent: 'center' }}>
        <Pagination
          variant="outlined"
          shape="rounded"
          page={currentPage}
          count={data?.popularMovies?.totalPages}
          onChange={paginationClickHandler}
        />
      </Box>
    </Box>
  );
};

export default MoviesList;
