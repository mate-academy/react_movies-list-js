/* eslint-disable max-len */

import './App.scss';
import { MovieList } from './components/MovieList/MovieList';
import { SideBar } from './components/SideBar/SideBar';
import moviesFromServer from './api/movies.json';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={moviesFromServer} />
    </div>

    <SideBar />
  </div>
);
