import React from 'react';
import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => {
  const moviesExist = movies.length > 0;

  return (
    <div className="movies">
      {moviesExist ? (
        <ul className="movies__list">
          {movies.map(movie => (
            <li key={movie.imdbId} className="movies__item">
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      ) : (
        <div>No movies available</div>
      )}
    </div>
  );
};
