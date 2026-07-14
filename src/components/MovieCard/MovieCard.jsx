import './MovieCard.scss';

export const MovieCard = ({ movie }) => {
  return (
    <div className="card" data-cy="Movie">
      <img data-cy="MovieImage" src={movie.imgUrl} alt={movie.title} />
      <p data-cy="MovieTitle">{movie.title}</p>
      <p data-cy="MovieDescription">{movie.description}</p>
      <a data-cy="MovieLink" href={movie.imdbUrl}>
        IMDB
      </a>
    </div>
  );
};
