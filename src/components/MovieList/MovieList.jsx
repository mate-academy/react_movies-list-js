import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';

export default function MovieList({ movies }) {
  const sorted = [...movies].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div>
      {movies.length === 0 ? (
        <p>No movies found</p>
      ) : (
        sorted.map(movie => <MovieCard key={movie.imdbId} movie={movie} />)
      )}
    </div>
  );
}
