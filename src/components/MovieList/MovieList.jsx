import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movies" data-cy="movies">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} /> //  передає всі дані фільму в компонент для відображення
    ))}
  </div>
);

