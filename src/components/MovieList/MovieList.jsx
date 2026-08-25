import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import '../MovieList/MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </div>
);

export default MovieList;
