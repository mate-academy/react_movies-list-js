import './MovieCard.scss';

export const MovieCard = ({ movie }) => (
  <div className="card">
    <img
      src={movie.imgUrl}
      alt={movie.title}
      className="card__image"
      data-cy="MovieImage"
    />
    <a
      href={movie.imdbUrl}
      target="_blank"
      rel="noreferrer"
      className="card__link"
      data-cy="MovieLink"
    >
      View on IMDb
    </a>
    <h3 className="card__title" data-cy="MovieTitle">
      {movie.title}
    </h3>
    <p className="card__description" data-cy="MovieDescription">
      {movie.description}
    </p>
  </div>
);
