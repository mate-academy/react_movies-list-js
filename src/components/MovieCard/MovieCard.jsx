import './MovieCard.scss';

export const MovieCard = ({
  movie: { imgUrl, title, description, imdbUrl },
}) => (
  <div className="card" data-cy="Movie">
    <div className="card-image">
      <figure className="image is-4by3">
        <img data-cy="MovieImage" src={imgUrl} alt={title} />
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
            {title}
          </p>
        </div>
      </div>

      <div className="content">
        <p data-cy="MovieDescription">{description}</p>

        <a href={imdbUrl} data-cy="MovieLink">
          IMDB
        </a>
      </div>
    </div>
  </div>
);
