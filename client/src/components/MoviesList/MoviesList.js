import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Pagination } from '@mui/material';

import { MovieCard } from '../MovieCard';
import { MAX_PAGE_COUNT } from '../../constants/pagination';

const propsTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
      posterPath: PropTypes.string,
    })
  ),
  onPaginationClick: PropTypes.func,
  onAddNewMovie: PropTypes.func.isRequired,
  onRemoveNewMovie: PropTypes.func.isRequired,
};

const defaultProps = {
  movies: [],
  onPaginationClick: () => {},
};

const MoviesList = ({
  movies,
  currentPage,
  totalPages,
  onPaginationClick,
  onAddNewMovie,
  onRemoveNewMovie,
}) => {
  const count = totalPages <= MAX_PAGE_COUNT ? totalPages : MAX_PAGE_COUNT;

  const renderMovieCard = (movie) => (
    <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
      <MovieCard
        movie={movie}
        onAddNewMovie={onAddNewMovie}
        onRemoveNewMovie={onRemoveNewMovie}
      />
    </Grid>
  );

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Grid container spacing={2}>
        {movies.map(renderMovieCard)}
      </Grid>

      <Box sx={{ mt: '30px', display: 'flex', justifyContent: 'center' }}>
        <Pagination
          variant="outlined"
          shape="rounded"
          page={currentPage}
          count={count}
          onChange={onPaginationClick}
        />
      </Box>
    </Box>
  );
};

MoviesList.propTypes = propsTypes;
MoviesList.defaultProps = defaultProps;

export default MoviesList;
