export const MovieCard = ({ movie }) => (
  <div className="card" data-testid="Movie">
    <div className="card-image">
      <figure className="image is-4by3">
        <img data-testid="MovieImage" src={movie.posterUrl} alt="Movie logo" />
      </figure>
    </div>

    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src="images/imdb-logo.jpeg" alt="imdb" />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-8" data-testid="MovieTitle">
            {movie.title}
          </p>
        </div>
      </div>
      <div className="content">
        <p data-testid="MovieDescription">{movie.description}</p>
        <a
          href={movie.imdbUrl}
          target="_blank"
          rel="noreferrer"
          data-testid="MovieLink"
        >
          IMDB
        </a>
      </div>
    </div>
  </div>
);
