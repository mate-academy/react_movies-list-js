import './MovieCard.scss';

export const MovieCard = ({ movie }) => (
  <div className="card" data-cy="Movie">
    <div className="card-image">
      <figure className="image is-4by3">
        {movie && (
          <img data-cy="MovieImage" src={movie.imgUrl} alt="Film logo" />
        )}
      </figure>
    </div>

    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <a
              data-cy="MovieImdb"
              href={movie && movie.imdbUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              IMDb
            </a>
          </figure>
        </div>

        <div className="media-content">
          <p className="title is-8" data-cy="MovieTitle">
            {movie && movie.title}
          </p>
        </div>
      </div>

      <div className="content">
        <p data-cy="MovieDescription">{movie && movie.description}</p>
        <a href="https://www.imdb.com/title/tt1375666" data-cy="MovieLink">
          IMDB
        </a>
      </div>
    </div>
  </div>
);
