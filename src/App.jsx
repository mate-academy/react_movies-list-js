/* eslint-disable max-len */

import React, { useState } from 'react';
import './App.scss';
import { MovieList } from './components/MovieList';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(movies, { query }) {
  let preparedMovies = [...movies];

  if (query) {
    preparedMovies = preparedMovies.filter(movie => movie.title.includes(query));
  }

  return preparedMovies;
}

export const App = ({ filterBy }) => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedMovies(moviesFromServer, { query });

  return (
    <div className="page">
      <div className="search-bar">
        <p className="title">Search movie</p>
        <input
          value={query}
          type="text"
          placeholder="Type search word"
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
      </div>

      <div className="main-content">
        <MovieList
          movies={visibleMovies}
          filterBy={(newQuery) => {
            setQuery(newQuery);
          }}
        />
      </div>

      <div className="sidebar" data-cy="Sidebar">
        Sidebar will be here
      </div>
    </div>
  );
};
