import { useCallback, useState } from 'react';

export const useSelectedMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState([]);

  const add = useCallback(
    (movie) => {
      if (!selectedMovies.filter((m) => m.id === movie.id).length > 0) {
        setSelectedMovies([...selectedMovies, movie]);
      }
    },
    [selectedMovies]
  );

  const remove = useCallback(
    (movie) => {
      const arr = selectedMovies.filter((m) => m.id !== movie.id);
      setSelectedMovies([...arr]);
    },
    [selectedMovies]
  );

  return {
    selectedMovies,
    add,
    remove,
  };
};
