import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Grid, Typography } from '@mui/material';
import { MOVIES_BY_IDS } from '../../queries';
import { MovieCard } from '../../components/MovieCard';

const stringToArrayOfNumbers = (fullString, separator = ',') => {
  let fullArray = [];

  if (fullString !== undefined) {
    if (fullString.indexOf(separator) === -1) {
      fullArray.push(parseInt(fullString, 10));
    } else {
      fullArray = fullString.split(separator).map((str) => parseInt(str, 10));
    }
  }

  return fullArray;
};

const RecommendedPage = () => {
  const [searchParams] = useSearchParams();
  const ids = stringToArrayOfNumbers(searchParams.get('ids'));
  const { loading, error, data } = useQuery(MOVIES_BY_IDS, {
    variables: { ids },
  });

  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <Typography variant="h1" component="h1" gutterBottom>
        {searchParams.get('title')}
      </Typography>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Grid container spacing={2}>
          {data?.moviesByIds.map((movie) => (
            <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
              <MovieCard movie={movie} isPreviewMode />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default RecommendedPage;
