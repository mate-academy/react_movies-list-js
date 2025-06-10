import './MovieCard.scss';

export const MovieCard = ({ movie }) => (
  <div className="card" data-cy="Movie">
    <img
      className="card-image"
      data-cy="MovieImage"
      src={movie.imgUrl}
      alt={movie.title}
    />
    <h3 className="card-title" data-cy="MovieTitle">
      {movie.title}
    </h3>
    <p className="card-description" data-cy="MovieDescription">
      {movie.description}
    </p>

    <a href={movie.imdbUrl} data-cy="MovieLink">
      IMDB
    </a>
  </div>
);
