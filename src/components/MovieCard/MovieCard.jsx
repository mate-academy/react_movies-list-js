// MovieCard.jsx
import './MovieCard.scss';

export const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h2 data-cy="MovieTitle">{movie.title}</h2>
      <p data-cy="MovieDescription">{movie.description}</p>
      <a
        data-cy="MovieLink"
        href={movie.imdbUrl}
        target="_blank"
        rel="noreferrer"
      >
        IMDb
      </a>
      <img data-cy="MovieImage" src={movie.imgUrl} alt={movie.title} />
    </div>
  );
};
