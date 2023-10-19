import React from 'react';
import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(
      movie => <MovieCard key={movie.imbdId} movie={movie} />,
    )}
  </div>
);
