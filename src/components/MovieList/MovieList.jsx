import './MovieList.scss';

//export const MovieList = () => <>Put the list here</>;

import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        key={movie.imdbId}
        movie={movie}
      />
    ))}
  </div>
);

export default MovieList;