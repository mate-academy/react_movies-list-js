import './MovieCard.scss';

export const MovieCard = ({ movie }) => (
  <div className="card" data-cy="Movie">
    <p className="title is-8" data-cy="MovieTitle">
      {movie.title}
    </p>
    <p data-cy="MovieDescription">{movie.description}</p>
  </div>
);
