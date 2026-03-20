import './MovieCard.scss';

export const MovieCard = ({ movie }) => (
  <div className="card" data-cy="Movie">
    <div className="card-image">
      <figure className="image is-4by3">
        <img data-cy="MovieImage" src={movie.imgUrl} alt="Film logo" />
      </figure>
    </div>

    <div className="card-content">
      <p data-cy="MovieTitle">{movie.title}</p>

      <p data-cy="MovieDescription">{movie.description}</p>

      <a href={movie.imdbUrl} data-cy="MovieLink">
        IMDB
      </a>
    </div>
  </div>
);
