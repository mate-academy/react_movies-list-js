import React from 'react';
import './MovieCard.scss';

export const MovieCard = ({ movie }) => {
  const { title, description, imgUrl, imdbUrl } = movie;

  return (
    <div className="card" data-cy="Movie">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={imgUrl} alt={title} data-cy="MovieImage" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4" data-cy="MovieTitle">
              {title}
            </p>
          </div>
        </div>

        <div className="content">
          <span data-cy="MovieDescription">{description}</span>
          <br />
          <a href={imdbUrl} data-cy="MovieLink">IMDb</a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;