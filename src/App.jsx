/* eslint-disable max-len */

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MovieList } from './components/MovieList/MovieList';
// import { MovieList } from './components/MovieList/MovieList';
// import { MovieCard } from './components/MovieCard/MovieCard';

// const MovieList = () => (
//   <div className="movies MovieList">
//   {moviesFromServer.map(movie => (
//     <MovieCard movie={movie} key = {movie.imdbId} />
//   ))}
// </div>
// )

// export const App = () => (
//   <div className="page">
//     <div className="page-content">
//       <MovieList moviesFromServer={moviesFromServer} />
//     </div>

//     <div className="sidebar" data-cy="Sidebar">
//       Sidebar will be here
//     </div>
//   </div>
// );

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={moviesFromServer} />
    </div>
    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
