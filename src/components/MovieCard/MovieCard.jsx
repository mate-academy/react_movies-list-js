import React from 'react';

export function MovieCard({ movie }) {
  if (!movie) return null;

  return (
    <div data-testid="Movie">
      <h2 data-testid="MovieTitle">{movie.title}</h2>
      <img src={movie.posterUrl} alt={movie.title} />
      <p>{movie.description}</p>
      <a href={movie.imdbUrl} target="_blank" rel="noopener noreferrer">
        IMDb
      </a>
    </div>
  );
}
