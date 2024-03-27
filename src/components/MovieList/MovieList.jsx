import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ moviesFromServer }) => (
  <div className="movies">
    {moviesFromServer.length
      ? moviesFromServer.map(movie => (
          <MovieCard movie={movie} key={movie.imdbId} />
          // eslint-disable-next-line indent
        ))
      : ''}
  </div>
);
