import React from 'react';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => {
  return (
    <div className="movies" data-cy="MovieList">
      {movies.map(movie => (
        <div key={movie.imdbId} data-cy="Movie">
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};
