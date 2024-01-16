import moviesFromServer from '../../api/movies.json';
import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies = moviesFromServer }) => {
  // Check if the movies array is empty
  if (movies.length === 0) {
    return null;
  }

  // Render the list of movies
  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
    </div>
  );
};
