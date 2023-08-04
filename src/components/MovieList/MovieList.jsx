import './MovieList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ moviesFromServer }) => (

  <div className="movies">
    {moviesFromServer.map(movies => (
      <MovieCard
        movies={movies}
        key={movies.imdbId}
      />
    ))}
  </div>
);
