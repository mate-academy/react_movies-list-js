import './MovieList.scss';
import moviesFromServer from '../../api/movies.json';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = () => (
  <div className="movies">
    {/* Проверяем, что moviesFromServer существует перед его использованием */}
    {moviesFromServer &&
      moviesFromServer.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
  </div>
);
