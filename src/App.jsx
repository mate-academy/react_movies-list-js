/* eslint-disable max-len */

import './App.scss';
import { MovieList } from './components/MovieList/MovieList';
import moviesData from './api/movies.json';
import { useState } from 'react';

function prepareMovies(goods, query) {
  let sorted = [...goods];
  let newQuery = query.toLowerCase();

  sorted = sorted.filter(good => (
    good.title.toLowerCase().includes(newQuery))
    || (good.description.toLowerCase().includes(newQuery)));

  return sorted;
};

export const App = () => {
  const [sortField, setSortField] = useState('');
  const visibleGoods = prepareMovies(moviesData, sortField);

  return (
    <div className="page">
      <div className="page-content">
        <input
          type="text"
          value={sortField}
          onChange={(event) => (setSortField(event.target.value))} />

        <MovieList movies={visibleGoods} />
      </div>

      <div className="sidebar" data-cy="Sidebar">
        Sidebar will be here
      </div>
    </div>
  )
};
