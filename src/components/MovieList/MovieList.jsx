/* eslint-disable max-len */
import './MovieList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </div>
);
