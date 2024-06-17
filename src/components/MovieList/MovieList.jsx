import './MovieList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard key="movie.imdbId" movie={movie} />
    ))}
  </div>
);
