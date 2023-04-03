import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  Button,
  CardActions,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from '@mui/material';

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
  const { t } = useTranslation();

  return (
    <Card sx={{ height: '100%' }}>
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
            {overview || t('movie.common.empty')}
          </Typography>
        )}
      </CardContent>

      {!isPreviewMode && (
        <CardActions>
          <Button size="small" onClick={() => onAddNewMovie(movie)}>
            {t('movie.common.button.add')}
          </Button>
          <Button size="small" onClick={() => onRemoveNewMovie(movie)}>
            {t('movie.common.button.remove')}
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

MovieCard.propTypes = propTypes;
MovieCard.defaultProps = defaultProps;

export default MovieCard;
