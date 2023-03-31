import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Button, CardActions } from '@mui/material';

const propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
    posterPath: PropTypes.string,
    overview: PropTypes.string,
  }).isRequired,
  onAddNewMovie: PropTypes.func,
  onRemoveNewMovie: PropTypes.func,
  isPreviewMode: PropTypes.bool,
};

const defaultProps = {
  onAddNewMovie: () => {},
  onRemoveNewMovie: () => {},
  isPreviewMode: false,
};

const MovieCard = ({
  movie,
  onAddNewMovie,
  onRemoveNewMovie,
  isPreviewMode,
}) => {
  const { title, releaseDate, posterPath, overview } = movie;

  return (
    <Card>
      <CardMedia sx={{ height: 280 }} image={posterPath} title={title} />
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
        {releaseDate && (
          <Typography gutterBottom variant="body2" color="text.secondary">
            {releaseDate}
          </Typography>
        )}
        {overview && (
          <Typography gutterBottom variant="body2" color="text.secondary">
            {overview}
          </Typography>
        )}
      </CardContent>

      {!isPreviewMode && (
        <CardActions>
          <Button size="small" onClick={() => onAddNewMovie(movie)}>
            Add
          </Button>
          <Button size="small" onClick={() => onRemoveNewMovie(movie)}>
            Remove
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

MovieCard.propTypes = propTypes;
MovieCard.defaultProps = defaultProps;

export default MovieCard;
