/* eslint-disable max-len */

import './App.scss';
import { MovieList } from './components/MovieList';
import { Sidebar } from './components/Sidebar';
import movies from './api/movies.json';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={movies} />
    </div>

    <Sidebar />
  </div>
);
