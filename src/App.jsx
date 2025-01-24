/* eslint-disable max-len */

import React from 'react';
import moviesFromServer from './api/movies.json';
import { MovieList } from './components/MovieList';
import './App.scss';
const App = () => {
  return (
    <div className="App" data-cy="app">
      <h1>Movies</h1>
      <div data-cy="Sidebar" className="Sidebar">
        Sidebar will be here
      </div>
      < MovieList movies={moviesFromServer} />
    </div>
  );
};

export default App;
