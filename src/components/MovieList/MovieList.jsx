import { Card } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ moviesFromServer }) => {
  return moviesFromServer.map(movie => (
    <Card movie={movie} key={movie.imdbId} />
  ));
};
