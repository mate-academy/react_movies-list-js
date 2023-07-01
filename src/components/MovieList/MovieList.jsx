import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movieList }) => (
  <div className="movies">
    {
      movieList.map(el => (
        <MovieCard movie={el} />
      ))
    }
  </div>
);
