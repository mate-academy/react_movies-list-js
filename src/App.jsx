/* eslint-disable max-len */

import './App.scss';
import moviesFromServer from './api/movies.json';
import { useEffect } from 'react';
import { MovieList } from './components/MovieList/MovieList';

export const App = () => {
  useEffect(() => {
    console.log(moviesFromServer);
  }, []); // Empty dependency array ensures this runs only once after the initial render

  return (
    <div className="page">
      <div className="page-content">
        <MovieList movies={moviesFromServer} />
      </div>

      <div className="sidebar" data-cy="Sidebar">
        Sidebar will be here
      </div>
    </div>
  );
};
