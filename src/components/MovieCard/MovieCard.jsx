import React from 'react';

export const MovieCard = ({ movie }) => {
  const { title, description, imgUrl, imdbUrl } = movie;

  return (
    <div className="card" data-cy="MovieCard">
      <div className="card-image">
        <figure className="image is-4by3">
          <img data-cy="MovieImage" src={imgUrl} alt="Film logo" />
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
          <p data-cy="MovieDescription">{description}</p>
          <a href={imdbUrl} data-cy="MovieLink">
            Write a review
          </a>
        </div>
      </div>
    </div>
  );
};
