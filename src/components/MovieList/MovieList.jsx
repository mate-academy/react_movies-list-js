/* eslint-disable max-len */

import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

/**
 * @typedef {Object} Movie
 * @property {string} imdbId
 * @property {string} title
 * @property {string} description
 * @property {string} imgUrl
 * @property {string} imdbUrl
 */

/**
 * @param {{ movies: Movie[] }} props
 */

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </div>
);
