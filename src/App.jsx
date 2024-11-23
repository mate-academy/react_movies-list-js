/* eslint-disable max-len */

import { useState } from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { MovieList } from './components/MovieList/MovieList';

const getPrepearMovies = (movies, query) => {
  const cloneMovies = [...movies];
  const normalizeStr = query.toLowerCase().trim();

  if (normalizeStr) {
    return cloneMovies.filter(movie => {
      if (movie.title.toLowerCase().trim().includes(normalizeStr)) {
        return movie;
      }

      if (movie.description.toLowerCase().trim().includes(normalizeStr)) {
        return movie;
      }

      return '';
    });
  }

  return cloneMovies;
};

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPrepearMovies(moviesFromServer, query);

  // function handelImput (e) {
  //   return e.target
  // }
  return (
    <div className="page">
      <div className="page-content">
        <MovieList movies={visibleMovies} />
      </div>

      <div className="sidebar" data-cy="Sidebar">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        Sidebar will be here
      </div>
    </div>
  );
};
