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

export const MOVIES_BY_IDS = gql`
  query moviesByIds($ids: [Int]) {
    moviesByIds(ids: $ids) {
      id
      status
      title
      posterPath
      releaseDate
      overview
    }
  }
`;
