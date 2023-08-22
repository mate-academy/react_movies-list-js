/* eslint-disable max-len */

import './App.scss';
import { MoviesList } from './components/MovieList';
import moviesFromServer from './api/movies.json';
import { Sidebar } from './components/Sidebar';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList moviesFromServer={moviesFromServer} />
    </div>

    <Sidebar />
  </div>
);
