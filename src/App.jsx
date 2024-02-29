// App.jsx
import React from 'react';
import './App.scss';
import { MovieList } from './components/MovieList';
import moviesData from './api/movies.json';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={moviesData} />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
