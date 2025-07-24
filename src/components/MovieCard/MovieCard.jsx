import './MovieCard.scss';

export const MovieCard = ({ movie }) => (
  <div className="card" data-cy="movie-card">
    <a href={movie.imdbUrl} target="_blank" rel="noreferrer">
      <img src={movie.imgUrl} alt={movie.title} data-cy="movie-poster" />
    </a>
    <h2 data-cy="movie-title">{movie.title}</h2>
    <p data-cy="movie-year">{movie.year}</p>
    <p>{movie.description}</p>
  </div>
);
