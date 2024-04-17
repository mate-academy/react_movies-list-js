import React from 'react';
import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => (
  <>
    <div className="movies">
      <ul>
        {movies.map(movie => (
          <li key={movie.imdbId} data-cy="Movie">
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  </>
);
