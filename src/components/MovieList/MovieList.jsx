import './MovieList.scss';
import '../../api/movies.json';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(film => (
      <MovieCard key={film.imdbId} movie={film} />
    ))}
  </div>
);
