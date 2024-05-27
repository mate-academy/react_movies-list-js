// src/components/MovieCard/MovieCard.jsx
import React from 'react';
import './MovieCard.scss';

const MovieCard = ({ movie }) => {
  return (
    <div className="card" data-cy="Movie">
      <div className="card-image">
        <img
          src={movie.imgUrl}
          alt={movie.title}
          className="card-img"
          data-cy="MovieImage"
        />
      </div>
      <div className="card-content">
        <h2 data-cy="MovieTitle">{movie.title}</h2>
        <p data-cy="MovieDescription">{movie.description}</p>
        <a
          href={movie.imdbUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cy="MovieLink"
        >
          IMDB
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
