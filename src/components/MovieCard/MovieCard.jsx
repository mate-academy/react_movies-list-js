import './MovieCard.scss';

export const MovieCard = ({ props }) => {
  const { imgUrl, title, description, imdbUrl } = props;

  return (
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src={imgUrl} alt="imdb" />
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
  );
};
