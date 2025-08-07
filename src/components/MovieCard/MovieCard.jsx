import './MovieCard.scss';

const IMDB_LOGO_URL =
  'https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg';

export const MovieCard = ({ movie }) => (
  <div className="card" data-cy="Movie">
    <div className="card-image">
      <figure className="image is-4by3">
        <img data-cy="MovieImage" src={movie.imgUrl} alt="Film logo" />
      </figure>
    </div>

    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src={IMDB_LOGO_URL} alt="imdb" />
          </figure>
        </div>

        <div className="media-content">
          <p className="title is-7" data-cy="MovieTitle">
            {movie.title}
          </p>
        </div>
      </div>

      <div className="content">
        <p data-cy="MovieDescription">{movie.description}</p>

        <a href={movie.imdbUrl} data-cy="MovieLink">
          IMDB
        </a>
      </div>
    </div>
  </div>
);
