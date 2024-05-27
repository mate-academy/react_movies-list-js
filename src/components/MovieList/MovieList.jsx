// src/components/MovieList/MovieList.jsx
import React from 'react';
import './MovieList.scss';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="movies" data-cy="MovieList">
      {movies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
