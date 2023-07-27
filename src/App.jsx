/* eslint-disable max-len */
import React from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import MoviesList from './components/MovieList/MovieList';

export const App = () => (
  <div className="page">
    <MoviesList movies={moviesFromServer} />

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
