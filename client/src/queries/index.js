import { gql } from '@apollo/client';

export const POPULAR_MOVIES_QUERY = gql`
  query GetPopularMovies($page: Int = 1, $lang: String = "en") {
    popularMovies(page: $page, lang: $lang) {
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
  query moviesByIds($ids: [Int], $lang: String = "en") {
    moviesByIds(ids: $ids, lang: $lang) {
      id
      status
      title
      posterPath
      releaseDate
      overview
    }
  }
`;
