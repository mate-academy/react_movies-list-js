// import { spawn } from 'child_process';
import './MovieCard.scss';

export const MovieCard = ({ movie }) => (
  <div
    data-cy="Movie"
    className="Card"
  >
    <div
      className="card-image"
    >
      <img
        className="MoviesPoster"
        data-cy="MovieImage"
        alt="Film logo"
        src={movie.imgUrl}
      />
    </div>

    <div className="Film_container">
      <img
        src="images/imdb-logo.jpeg"
        alt="imdb"
        className="IMDB_Photo"
      />

      <p
        data-cy="MovieTitle"
        className="FilmTitle"
      >
        {movie.title}
      </p>
    </div>

    <div
      data-cy="MovieDescription"
      className="MovieDescription"
    >
      {movie.description}
    </div>

    <p>
      <a
        data-cy="MovieLink"
        href={movie.imdbUrl}
      >
        IMDB
      </a>
    </p>
  </div>
);
