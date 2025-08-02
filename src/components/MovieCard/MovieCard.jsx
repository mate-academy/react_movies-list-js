import React from 'react';
import './MovieCard.scss';

export const MovieCard = ({ movie }) => (
  <div data-cy="card" className="card">
    <h2 data-cy="title" className="card__title">
      {movie.title}
    </h2>
    <img
      data-cy="img"
      className="card__img"
      src={movie.img}
      alt={`${movie.title} poster`}
    />
  </div>
);
