/* eslint-disable max-len */

import './App.scss';
import movieFromServer from './api/movies.json';
import { MovieList } from './components/MovieList';
import { Sidebar } from './components/Sidebar';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={movieFromServer} />
    </div>
    <Sidebar />
  </div>
);
