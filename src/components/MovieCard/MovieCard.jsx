import './MovieCard.scss';
import React from 'react';

const MovieCard = ({ movie }) => {
  const { imgUrl, title, description, imdbLink } = movie;

  return (
    <div className="card" data-cy="movie-card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            data-cy="movie-image"
            src={imgUrl}
            alt={title}
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
              {title}
            </p>
          </div>
        </div>
        <div className="content" data-cy="movie-description">
          <p>{description}</p>
          <a href={imdbLink} data-cy="movie-link">
            IMDB
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
