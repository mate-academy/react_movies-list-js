// MovieList.jsx
import React from 'react';
import './MovieList.scss'; // MovieList styles
import { MovieCard } from '../MovieCard/MovieCard'; // Import MovieCard component

export const MovieList = ({ movies }) => {
  return (
    <div className="movies">
      {/* Map through the movies array and render MovieCard for each movie */}
      {movies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
