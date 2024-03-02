import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ moviesFromServer }) => (
  <div className="movies">
    {moviesFromServer.map(moovie => (
      <MovieCard moovie={moovie} key={moovie.imdbId} />
    ))}
  </div>
);
