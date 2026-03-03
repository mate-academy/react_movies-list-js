import React from 'react';
import { MovieCard } from './components/MovieCard';
import movies from './api/movies.json';
import './App.scss';

export const App = () => {
  const firstMovie = movies[0];
  const secondMovie = movies[1];

  return (
    <div className="page">
      <div className="page-content">
        <div className="movies">
          {movies.map(movie => (
            <MovieCard movie={movie} key={movie.imdbId} />
          ))}
        </div>
      </div>

      <div className="sidebar" data-cy="Sidebar">
        Sidebar will be here
      </div>
    </div>
  );
};
