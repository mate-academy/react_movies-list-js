import './MovieCard.scss';

export const MovieCard = ({ movie }) => (
  <div className="card" data-cy="Movie">
    <img data-cy="MovieImage" src={movie.imgUrl} alt="Film logo" />
    <h3 data-cy="MovieTitle">{movie.title}</h3>
    <p data-cy="MovieDescription">{movie.description}</p>
    <a href={movie.imdbUrl} data-cy="MovieLink">
      IMDB
    </a>
  </div>
);
