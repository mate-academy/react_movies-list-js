import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {
      movies.map(item => (
        <MovieCard movie={item} key={item.imdbId} />
      ))
    }
  </div>
);
