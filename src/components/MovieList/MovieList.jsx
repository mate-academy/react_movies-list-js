import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => (
  <section className="movies">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </section>
);
