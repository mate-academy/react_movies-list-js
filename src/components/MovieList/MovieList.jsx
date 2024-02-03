import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ moviesFromServer }) => (
  <div className="movies">
    {moviesFromServer.map(item => (
      <MovieCard {...item} key={item.imdbId} />
    ))}
  </div>
);
