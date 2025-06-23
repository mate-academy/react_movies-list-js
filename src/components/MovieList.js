// MovieList.js
import React from 'react';
import MovieCard from './MovieCard.js';
// ou, se estiver em ./MovieCard/index.js:
export const MovieList = ({ movies }) => (
  <div className="movie-list" data-cy="movieList">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
);
