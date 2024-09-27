import React from 'react';
import { MovieCard } from '../MovieCard';

const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return null;
  }

  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
