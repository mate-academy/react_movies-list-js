import { MovieCard } from '../MovieCard';
import cards from '../../api/movies.json';
import './MovieList.scss';

export const MovieList = () => (
  <div className="movies">
    {cards.map(card => (
      <MovieCard movie={card} key={card.imdbId} />
    ))}
  </div>
);
