import './MovieCard.scss';

export const MovieCard = ({ movies }) => (
  <div className="Card">
    <div className="card-image">
      <img
        className="MoviesPoster"
        data-cy="MovieImage"
        alt="Film logo"
        src={movies.imgUrl}
      />
    </div>

    <div className="Film_container">
      <img src="images/imdb-logo.jpeg" alt="imdb" className="IMDB_Photo" />

      <p className="FilmTitle">{movies.title}</p>
    </div>

    <div className="MovieDescription">{movies.description}</div>

    <p>
      <a href={movies.imdbUrl}>IMDB</a>
    </p>
  </div>
);
