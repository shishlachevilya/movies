import * as React from 'react';
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
    releaseDate: PropTypes.string.isRequired,
    posterPath: PropTypes.string,
  }).isRequired,
};

const MovieCard = ({ movie }) => {
  const { title, releaseDate, posterPath } = movie;
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
        <Typography variant="body2" color="text.secondary">
          {releaseDate}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add</Button>
        <Button size="small">Remove</Button>
      </CardActions>
    </Card>
  );
};

MovieCard.propTypes = propTypes;

export default MovieCard;
