import './MovieCard.scss';

export const MovieCard = ({ movie }) => {
  return (
    <div className="card" data-cy="Movie">
      <div className="card-image">
        <figure className="image is-4by3">
          <img data-cy="MovieImage" src={movie.imgUrl} alt={movie.title} />
        </figure>
      </div>

      <div className="card-content">
        <p className="title is-6" data-cy="MovieTitle">
          {movie.title}
        </p>

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
    </div>
  );
};
