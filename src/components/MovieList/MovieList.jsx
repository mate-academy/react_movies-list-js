import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({movies}) => {
  return (
    <div className='movies' data-cy = 'movies-list'>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbId} movie ={movie} />
      ))}
    </div>
  );
}
