import './MovieList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ moviesFromServer }) => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        {moviesFromServer.map(movie => (
          <MovieCard
            moviesFromServer={movie}
            key={movie.imdbId}
          />
        ))}
      </div>
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
