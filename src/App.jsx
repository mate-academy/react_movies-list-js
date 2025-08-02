import React from 'react';
import './App.scss';
import { MovieList } from './components/MovieList/MovieList';

// (Use the exact array you were given from the “API” here)
export const moviesFromServer = [
  {
    title: 'Pulp Fiction',
    imdbId: 'tt0110912',
    img: 'https://via.placeholder.com/300x450?text=Pulp+Fiction',
  },
  {
    title: 'Inception',
    imdbId: 'tt1375666',
    img: 'https://via.placeholder.com/300x450?text=Inception',
  },
  {
    title: 'Interstellar',
    imdbId: 'tt0816692',
    img: 'https://via.placeholder.com/300x450?text=Interstellar',
  },
];

export const App = () => (
  <div className="App">
    <MovieList movies={moviesFromServer} />
  </div>
);
