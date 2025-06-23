import React from 'react';
import MovieCard from '../MovieCard';

const MovieList = ({ movies }) => (
  <div>
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);

export default MovieList;
