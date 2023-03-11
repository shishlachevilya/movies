import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  styled,
} from '@mui/material';

const propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
      posterPath: PropTypes.string,
    })
  ),
  onRemoveNewMovie: PropTypes.func.isRequired,
};

const defaultProps = {
  movies: [],
};

const MovieCard = styled(Card)(({ theme }) => ({
  '&:not(:last-child)': {
    marginBottom: theme.spacing(2),
  },
}));

const SelectedMoviesList = ({ movies, onRemoveNewMovie }) => {
  const renderSelectedMovieCard = (movie) => {
    const { id, title, releaseDate, posterPath } = movie;
    return (
      <MovieCard key={id} sx={{ display: 'flex', width: '100%' }}>
        <Box>
          <CardMedia
            component="img"
            sx={{ width: 100 }}
            image={posterPath}
            alt={title}
          />
        </Box>

        <Box sx={{ overflow: 'hidden' }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {releaseDate}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => onRemoveNewMovie(movie)}>
              Remove
            </Button>
          </CardActions>
        </Box>
      </MovieCard>
    );
  };

  return (
    <Box sx={{ padding: '16px', width: '100%' }}>
      {movies?.length ? movies.map(renderSelectedMovieCard) : 'add new movie'}
    </Box>
  );
};

SelectedMoviesList.propTypes = propTypes;
SelectedMoviesList.defaultProps = defaultProps;

export default SelectedMoviesList;
