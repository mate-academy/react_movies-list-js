import React from 'react';
import moviesFromServer from './api/movies.json';
import './App.scss';
import { MovieList } from './components/MovieList/MovieList';

const App = () => {
  return (
    <div className="page">
      <div className="page-content">
        <h1>Movie List</h1>
        <MovieList movies={moviesFromServer} />
      </div>
      <div className="sidebar" data-cy="Sidebar">
        Sidebar will be here
      </div>
    </div>
  );
};

export default App;
