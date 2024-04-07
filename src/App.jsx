/* eslint-disable max-len */

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MovieCard } from './components/MovieCard/MovieCard';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        {moviesFromServer.map(movie => (
          <MovieCard movies={movie} key={movie.imdbId}/>
        ))}
      </div>
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
