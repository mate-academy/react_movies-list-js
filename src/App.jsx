import React from 'react';
import './App.scss';
import { MovieList } from './components/MovieList/MovieList';
import moviesFromServer from './api/movies.json';

export const App = () => {
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
