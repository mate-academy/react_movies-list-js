import React from 'react';
import './MovieCard.scss';

export const MovieCard = ({ movie }) => {
  return (
    <div className="card" data-cy="movie-card">
      <h1 data-cy="MovieTitle">{movie.title}</h1>
      <p data-cy="MovieDescription">{movie.description}</p>
      <img data-cy="MovieImage" src={movie.imgUrl} alt="Poster" className="movie-poster"/>
      <a data-cy="MovieLink" href={movie.imdbUrl}>IMDb</a>
      <p data-cy="Movie">{movie.imdbId}</p>
    </div>
  );
};
