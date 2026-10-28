import React from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { MovieList } from './components/MovieList/MovieList';

export const App = () => {
  return (
    <div className="page">
      <div className="sidebar" data-cy="Sidebar">
        Sidebar will be here
      </div>

      <div className="page-content">
        <MovieList movies={moviesFromServer} />
      </div>
    </div>
  );
};

export default App;
