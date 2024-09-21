import moviesFromServer from '../../api/movies.json';
import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies = moviesFromServer }) => (
  <div className="movies">
    {movies.map(
      movie => movie && <MovieCard movie={movie} key={movie.imdbId} />,
    )}
  </div>
);
