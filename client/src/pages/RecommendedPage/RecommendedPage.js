import React, { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Box, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { MOVIES_BY_IDS } from '../../queries';
import { MovieCard } from '../../components/MovieCard';
import { LanguageContext } from '../../context/languageContext';

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
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);
  const [searchParams] = useSearchParams();
  const ids = stringToArrayOfNumbers(searchParams.get('ids'));
  const { loading, error, data } = useQuery(MOVIES_BY_IDS, {
    variables: { ids, lang: language },
    fetchPolicy: 'no-cache',
  });

  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <Typography variant="h3" component="h1" gutterBottom>
        {t('movie.common.title.recommended.page', {
          title: searchParams.get('title'),
        })}
      </Typography>
      <Box component="div" sx={{ mt: 5 }}>
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
      </Box>
    </div>
  );
};

export default RecommendedPage;
