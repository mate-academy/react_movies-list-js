// src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import MovieList from './components/MovieList/MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(moviesFromServer);
  }, []);

  return (
    <div className="App">
      <div className="page">
        <div className="page-content">
          <h1>Movies</h1>
          <MovieList movies={movies} />
        </div>
        <div className="sidebar" data-cy="Sidebar">
          Sidebar will be here
        </div>
      </div>
    </div>
  );
};

export default App;
