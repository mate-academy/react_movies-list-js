import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map(movie => (
        <MovieCard movie={movie}/>
      ))}
    </>);
}
