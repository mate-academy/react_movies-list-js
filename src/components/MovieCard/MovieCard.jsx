import React from 'react';
import './MovieCard.scss';

export const MovieCard = ({ movie }) => (
  <div className="card" data-cy="Movie">
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          data-cy="MovieImage"
          src={movie.imgUrl}
          alt={`${movie.title} poster`}
        />
      </figure>
    </div>

    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4" data-cy="MovieTitle">{movie.title}</p>
          <p className="subtitle is-6" data-cy="MovieYear">{movie.year}</p>
        </div>
      </div>

      <div className="content">
      <p data-cy="MovieDescription">{movie.description}</p>

        <a href={`https://www.imdb.com/title/${movie.imdbId}`} target="_blank" rel="noopener noreferrer" data-cy="MovieLink">
          View on IMDb
        </a>
      </div>
    </div>
  </div>
);
