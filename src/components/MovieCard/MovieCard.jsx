import './MovieCard.scss';
import { Fragment } from 'react';

export const MovieCard = ({ movie }) => (
  <>
    <div className="page">
      <div className="movies" />
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="images/imdb-logo.jpeg" alt="imdb" />
            </figure>
          </div>

          <div className="media-content">
            <div className="card" data-cy="Movie" key={movie.imdbId}>
              <div className="card-image" />
              <figure className="image is-4by3">
                <img data-cy="MovieImage" src={movie.imgUrl} alt="Film logo" />
              </figure>
            </div>
            <p className="title is-8" data-cy="MovieTitle">
              {movie.title}
            </p>
            <div className="content">
              <p data-cy="MovieDescription">{movie.description}</p>
            </div>
            <a href={movie.imdbUrl} data-cy="MovieLink">
              IMDB
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
);
