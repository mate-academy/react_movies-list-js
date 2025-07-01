import { Card } from '../MovieCard';
import './MovieList.scss';

 export const Movies = ({ moviesFromServer }) => {
  return (
    moviesFromServer.map(movie => (
      <Card movie={movie} key={movie.imdbId} />
    ))
  )
}