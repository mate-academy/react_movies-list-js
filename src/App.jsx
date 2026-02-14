import React from 'react';
import { MovieList } from './components/MovieList/MovieList';
import { moviesFromServer } from './api/movies.json';

export const App = () => (
  <div className="App">
    <MovieList movies={moviesFromServer} />
  </div>
);
