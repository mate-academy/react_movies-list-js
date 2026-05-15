import './MovieCard.scss';

export const MovieCard = ({ movie }) => (
  <div className="card" data-cy="Movie">
    <p data-cy="MovieTitle">{movie.title}</p>
    <p data-cy="MovieDescription">{movie.description}</p>
    <img data-cy="MovieImage" src={movie.imgUrl} alt="Film logo" />
    <a href={movie.imdbUrl} data-cy="MovieLink">
      View on IMDb
    </a>
  </div>
);
