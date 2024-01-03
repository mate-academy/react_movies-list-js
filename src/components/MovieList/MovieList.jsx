import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(film => <MovieCard key={film.imdbId} movie={film} />)}
  </div>
);
