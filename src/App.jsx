/* eslint-disable max-len */

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MovieList } from './components/MovieList';
import { Sidebar } from './components/Sidebar';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList moviesData={moviesFromServer} />
    </div>
    <Sidebar />
  </div>
);
