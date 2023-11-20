import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
// import moviesFromServer from '../../api/movies.json';

export const MovieList = ({ movies }) => (
  movies.length !== 0 && (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
    </div>
  )
);
