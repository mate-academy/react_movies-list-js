import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import moviesFromServer from '../../api/movies.json';

export const MovieList = () => (
  moviesFromServer.length !== 0 && (
    <div className="movies">
      {moviesFromServer.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
    </div>
  )
);
