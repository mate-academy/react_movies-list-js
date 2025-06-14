import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(card => (
      <MovieCard movie={card} key={card.imdbId} />
    ))}
  </div>
);
