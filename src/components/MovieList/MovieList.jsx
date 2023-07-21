import React from 'react';
import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(item => (
      <MovieCard key={item.imdbId} movie={item} />
    ))}
  </div>
);
