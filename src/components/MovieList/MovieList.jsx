/* eslint-disable import/extensions */
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import MovieCard from './MovieCard';
import './MovieList.scss';

function MovieList({ movies }) {
  return (
    <div className="movies" data-cy="movies">
      {movies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
