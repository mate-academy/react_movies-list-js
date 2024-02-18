/* eslint-disable max-len */

import { useState } from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { MovieList } from './components/MovieList';

export const App = () => {
  const [moviesToRend] = useState(moviesFromServer);
  const moviesToRendVar = moviesToRend;

  return (
    <div className="page">
      <div className="page-content">
        <MovieList movies={moviesToRendVar} />
      </div>

      <div className="sidebar" data-cy="Sidebar">
        Sidebar will be here
      </div>
    </div>
  );
};
