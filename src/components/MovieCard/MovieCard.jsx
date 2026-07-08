import './MovieCard.scss';

export const MovieCard = ({ movie }) => {
  return (
    <div className="card" data-cy="Movie">
      <div className="card-image">
        <figure className="image is-4by3">
          <img data-cy="MovieImage" src={movie.imgUrl} alt={movie.title} />
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
};

/*
  {
    "title": "The Day After Tomorrow",
    "description": "Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0319262",
    "imdbId": "tt0319262"
  },
*/
