import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div key={movie.imdbId} className="card" data-cy="Movie">
        <div className="card-image">
          <figure className="image is-4by3">
            <img data-cy="MovieImage" src={movie.imgUrl} alt="Film logo" />
          </figure>
        </div>
        <MovieCard movie={movie} />
      </div>
    ))}
  </div>
);
