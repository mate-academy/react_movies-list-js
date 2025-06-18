import './MovieCard.scss';

export const MovieCard = ({ card }) => (
  <div className="card" data-cy="movieCard">
    <div className="card-image">
      <figure className="image is-4by3">
        <img data-cy="movieImage" src={card.imgUrl} alt={card.title} />
      </figure>
    </div>

    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src="/images/imdb-logo.jpeg" alt="imdb" />
          </figure>
        </div>
      </div>

      <div className="media-content">
        <p className="title is-8" data-cy="movieTitle">
          {card.title}
        </p>
      </div>
    </div>

    <div className="content">
      <p data-cy="MovieDescription">{card.description}</p>
      <a href={card.imdbUrl} target="_blank" rel="noopener noreferrer">
        IMDB
      </a>
    </div>
  </div>
);
