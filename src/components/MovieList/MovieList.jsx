// src/components/MovieList.jsx
import React from 'react';
import { MovieCard } from '../MovieCard';


export const MovieList = ({ movies }) => (
  <div className="movies" data-cy="movieList">
    {movies.map(movie => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </div>
);
