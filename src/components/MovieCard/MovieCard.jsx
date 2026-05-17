export const MovieCard = ({ movie }) => {
  return (
    <div className="card" data-cy="Movie">
      <img src={movie.imgUrl} alt={movie.title} data-cy="MovieImage" />

      <h3 data-cy="MovieTitle">{movie.title}</h3>

      <p data-cy="MovieDescription">{movie.description}</p>

      <a
        href={movie.imdbUrl}
        target="_blank"
        rel="noreferrer"
        data-cy="MovieLink"
      >
        IMDb
      </a>
    </div>
  );
};
