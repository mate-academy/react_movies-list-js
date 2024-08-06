import './MovieCard.scss';

export default function MovieCard({ movie }) {
  if (!movie) {
    return null;
  }

  return (
    <div className="card" data-cy="Movie">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            data-cy="MovieImage"
            src={movie.imgUrl || ''}
            alt={`${movie.title || 'Movie'} poster`}
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
              {movie.title || 'No title'}
            </p>
          </div>
        </div>

        <div className="content">
          <p data-cy="MovieDescription">
            {movie.description || 'No description'}
          </p>

          <a href={movie.imdbUrl || '#'} data-cy="MovieLink">
            IMDB
          </a>
        </div>
      </div>
    </div>
  );
}
