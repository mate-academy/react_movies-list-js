import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ moviesFromServer }) => (
  <div className="movies">
    {moviesFromServer.map(card => (
      <MovieCard card={card} key={card.imdbId} />
    ))}
  </div>
);
