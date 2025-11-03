import './MovieCard.scss';
import PropTypes from 'prop-types';

export const MovieCard = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="card" data-cy="Movie">
      <div className="card-image">
        <figure className="image is-4by3">
          <img data-cy="MovieImage" src={movie.imgUrl} alt={movie.title} />
        </figure>
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4" data-cy="MovieTitle">
              {movie.title}
            </p>
          </div>
        </div>

        <div className="content">
          <p data-cy="MovieDescription">{movie.description}</p>
          <div className="links">
            <a
              data-cy="MovieLink"
              href={movie.imdbUrl}
              target="_blank"
              rel="noreferrer"
            >
              IMDB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
