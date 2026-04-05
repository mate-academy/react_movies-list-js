/* eslint-disable max-len */

import './App.scss';
import movies from './api/movies.json';
import { MovieList } from './components/MovieList/MovieList';
import { Sidebar } from './components/Sidebar/Sidebar';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={movies} />
    </div>
    <Sidebar />
  </div>
);
