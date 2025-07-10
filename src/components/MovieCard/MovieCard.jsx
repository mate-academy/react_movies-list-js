import './MovieCard.scss';

export const MovieCard = ({ movieFromServer }) => (
  <div className="card" data-cy="Movie">
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          data-cy="MovieImage"
          src={movieFromServer.imgUrl}
          alt="Film logo"
        />
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
          <p className="title is-8" data-cy="MovieTitle">
            {movieFromServer.title}
          </p>
        </div>
      </div>

      <div className="content">
        <p data-cy="MovieDescription">{movieFromServer.description}</p>

        <a href={movieFromServer.imdbUrl} data-cy="MovieLink">
          IMDB
        </a>
      </div>
    </div>
  </div>
);
