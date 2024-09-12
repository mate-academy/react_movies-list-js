/* eslint-disable max-len */

import { useState } from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { MovieList } from './components/MovieList/MovieList';

export const App = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value.trim());
  };

  const visibleMovies = moviesFromServer.filter(
    movie =>
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.description.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="page">
      <div className="page-content">
        <h1>Search movie</h1>
        <input
          type="text"
          placeholder="Type search word"
          value={query}
          onChange={handleInputChange}
        />
        <MovieList movies={visibleMovies} />
      </div>
      <div className="sidebar" data-cy="Sidebar">
        Sidebar will be here
      </div>
    </div>
  );
};
