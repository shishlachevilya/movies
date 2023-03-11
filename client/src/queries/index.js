import { gql } from '@apollo/client';

export const POPULAR_MOVIES_QUERY = gql`
  query GetPopularMovies($page: Int = 1) {
    popularMovies(page: $page) {
      page
      totalPages
      totalResults
      results {
        id
        title
        releaseDate
        posterPath
      }
    }
  }
`;
