import './MovieCard.scss';

export const MovieCard = ({ movie }) => (
  <div className="card" data-cy="Movie">
    <div className="card-image">
      <img src={movie.imgUrl} alt={movie.title} data-cy="MovieImage" />
    </div>

    <div className="card-content">
      <h2 data-cy="MovieTitle">{movie.title}</h2>

      <p data-cy="MovieDescription">{movie.description}</p>

      <a
        href={movie.imdbUrl}
        target="_blank"
        rel="noreferrer"
        data-cy="MovieLink"
      >
        View on IMDb
      </a>
    </div>
  </div>
);
