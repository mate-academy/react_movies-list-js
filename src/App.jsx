/* eslint-disable max-len */

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MovieList } from './components/MovieList/MovieList';
import { Sidebar } from './components/Sidebar/Sidebar';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={moviesFromServer}/>
    </div>

    <Sidebar/>
  </div>
);
