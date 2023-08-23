import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.scss';

const MovieList = ({ movies }) => (
  <div className="movies" data-cy="movies-list">
    {movies.map(movie => <MovieCard key={movie.imdbId} movie={movie} />)}
  </div>
);

export default MovieList;
