import React from 'react';
import './MovieCard.scss';

function MovieCard({ movie }) {
  return (
    <div className="card" data-cy="card">
      <h2 data-cy="card-title">{movie.title}</h2>
      <p data-cy="card-year">{movie.year}</p>
    </div>
  );
}

export default MovieCard;
