import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ moviesFromServer }) => (
  <div className="movies">
    {
      moviesFromServer.map(info => (
        <MovieCard info={info} />
      ))
    }
  </div>
);
