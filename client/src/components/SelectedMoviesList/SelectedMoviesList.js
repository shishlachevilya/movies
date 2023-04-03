import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
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
import SelectedMoviesForm from '../SelectedMoviesForm/SelectedMoviesForm';
import { ConfirmModal } from '../ConfirmModal';
import noMoviesImageSrc from '../../assets/no_movies.png';
import { NAN_MESSAGE } from '../../constants';

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

const NoMovies = styled(Box)(() => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '50px 0',
}));

const SelectedMoviesList = ({ movies, onRemoveNewMovie }) => {
  const { t } = useTranslation();
  const [selectedListName, setSelectedListName] = useState('');
  const [link, setLink] = useState('');

  if (!movies.length) {
    return (
      <NoMovies>
        <Box
          component="img"
          sx={{
            width: '50%',
            opacity: '.6',
          }}
          alt="No images."
          src={noMoviesImageSrc}
        />
        <Typography variant="h5" mt={2}>
          {t('movie.common.title.no_movies')}
        </Typography>
      </NoMovies>
    );
  }

  const onSubmit = ({ listName }) => {
    const ids = movies.map(({ id }) => id).join();
    const url = `${window.location.host}/recommended?title=${listName}&ids=${ids}`;

    setSelectedListName(listName);
    setLink(url);
  };

  const onCloseConfirmModal = () => {
    setLink('');
  };

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
              {title || NAN_MESSAGE}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {releaseDate || NAN_MESSAGE}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => onRemoveNewMovie(movie)}>
              {t('movie.common.button.remove')}
            </Button>
          </CardActions>
        </Box>
      </MovieCard>
    );
  };

  return (
    <Box sx={{ padding: '16px' }}>
      {movies.map(renderSelectedMovieCard)}
      <Box pt={2}>
        <SelectedMoviesForm onSubmit={onSubmit} />
      </Box>
      <ConfirmModal
        url={link}
        title={selectedListName}
        open={!!link}
        onClose={onCloseConfirmModal}
      />
    </Box>
  );
};

SelectedMoviesList.propTypes = propTypes;
SelectedMoviesList.defaultProps = defaultProps;

export default SelectedMoviesList;
