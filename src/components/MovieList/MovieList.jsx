import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

function createMoveCard(movies) {
  return movies.map(movie => <MovieCard key={movie.imdbId} movie={movie} />);
}

export const MovieList = ({ movies = [] }) => (
  <div className="movies">{createMoveCard(movies)}</div>
);
