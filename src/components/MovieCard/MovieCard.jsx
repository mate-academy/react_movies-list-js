import './MovieCard.scss';

export const MovieCard = ({ movie }) => (
  <div className="card" data-cy="movieCard">
    <h4 className="card__title" data-cy="movieTitle">
      {movie.title}
    </h4>

    <p className="card__info" data-cy="movieDescription">
      {movie.description}
    </p>
  </div>
);
