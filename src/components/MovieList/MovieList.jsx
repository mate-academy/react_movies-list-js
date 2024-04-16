import { MovieCard } from '../MovieCard';
import './MovieList.scss';
// import moviesFromServer from '../../api/movies.json';

export const MovieList = ({ moviesFromServer }) => (
  <div className="movies">
    {moviesFromServer.map(card => (
      <MovieCard card={card} key={card.imdbId} />
    ))}
  </div>
);
