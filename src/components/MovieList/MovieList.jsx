import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';

const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);

export default MovieList;
