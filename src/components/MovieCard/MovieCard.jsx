import './MovieCard.scss';

export const MovieCard = ({ movie }) => (
  <div className="card" data-cy="Movie">
    <div className="card-image">
      <figure className="image">
        <img src={movie.imgUrl} alt={movie.title} data-cy="MovieImage" />
      </figure>
    </div>

    <div className="card-content">
      <div className="content">
        <a href={movie.imdbUrl} data-cy="MovieLink">
          <strong data-cy="MovieTitle">{movie.title}</strong>
        </a>

        <br />

        <p data-cy="MovieDescription">{movie.description}</p>
      </div>
    </div>
  </div>
);
