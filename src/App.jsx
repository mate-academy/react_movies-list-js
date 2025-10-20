/* eslint-disable react/jsx-filename-extension */
/* eslint-disable max-len */
import React from 'react';
import moviesFromServer from './api/movies.json';
import { MovieList } from './components/MovieList/MovieList';
import './App.scss';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={moviesFromServer} />
    </div>

    <aside className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </aside>
  </div>
);
