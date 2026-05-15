import './MovieCard.scss';

export const MovieCard = ({ movie }) => (
  <div className="card" data-cy="card">
    <p data-cy="title">{movie.title}</p>
    <p data-cy="description">{movie.description}</p>
    <img data-cy="img" src={movie.imgUrl} alt="Film logo" />
    <a href={movie.imdbUrl} data-cy="imdb-link">
      View on IMDb
    </a>
  </div>
);
