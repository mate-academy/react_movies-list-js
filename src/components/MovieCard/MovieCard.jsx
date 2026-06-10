import './MovieCard.scss';

export const MovieCard = ({ movie }) => (
  <div className="card" data-cy="Movie">
    ...
    <img data-cy="MovieImage" src={movie.imgUrl} alt="Film logo" />
    ...
    <p className="title is-8" data-cy="MovieTitle">
      {movie.title}
    </p>
    ...
    <p data-cy="MovieDescription">{movie.description}</p>
    ...
    <a href={movie.imdbUrl} data-cy="MovieLink">
      IMDB
    </a>
  </div>
);
