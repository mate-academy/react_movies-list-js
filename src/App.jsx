/* eslint-disable max-len */

import './App.scss';
import { MovieList } from './components/MovieList';
import movies from './api/movies.json';
import { Sidebar } from './components/Sidebar';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={movies} />
      <Sidebar />
    </div>
  </div>
);
