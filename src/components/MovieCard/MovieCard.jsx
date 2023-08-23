import './MovieCard.scss';
import React from 'react';

const MovieCard = ({ movie }) => (
  <div className="card" data-cy="movie-card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          data-cy="movie-image"
          src={movie.imgUrl}
          alt={movie.title}
        />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src="images/imdb-logo.jpeg" alt="imdb" />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-8" data-cy="movie-title">
            {movie.title}
          </p>
        </div>
      </div>
      <div className="content" data-cy="movie-description">
        <p>{movie.description}</p>
        <a href={movie.imdbLink} data-cy="movie-link">
          IMDB
        </a>
      </div>
    </div>
  </div>
);

export default MovieCard;
