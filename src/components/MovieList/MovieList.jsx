/* eslint-disable react/jsx-filename-extension */
/* eslint-disable max-len */

import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {/* <p className="title">Serch movie</p>
    <input
      value={query}
      type="text"
      placeholder="type search word"
      onChange={(event) => {
        filterBy(event.target.value);
      }}
    /> */}
    {movies.map(movie => (
      <MovieCard
        key={movie.imdbId}
        movie={movie}
      />
    ))}
  </div>
);
