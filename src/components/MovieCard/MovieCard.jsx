import React from 'react';

export const MovieCard = ({ movie }) => (
  <div className="card" data-cy="Movie">
    <img
      src={movie.imgUrl}
      alt={movie.title}
      className="card__image"
      data-cy="MovieImage"
    />
    <div className="card__content">
      <h2 data-cy="MovieTitle">{movie.title}</h2>
      <p data-cy="MovieDescription">{movie.description}</p>
      <a
        href={movie.imdbUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-cy="MovieLink"
      >
        IMDb
      </a>
    </div>
  </div>
);
