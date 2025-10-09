import './MovieCard.scss';

export const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img
      src={movie.imgUrl}
      alt={movie.title}
      className="movie-card__image"
      data-cy="MovieImage"
    />
    <a
      href={movie.imdbUrl}
      target="_blank"
      rel="noreferrer"
      className="movie-card__link"
      data-cy="MovieLink"
    >
      View on IMDb
    </a>
    <h3 className="movie-card__title" data-cy="MovieTitle">
      {movie.title}
    </h3>
    <p className="movie-card__description" data-cy="MovieDescription">
      {movie.description}
    </p>
  </div>
);
