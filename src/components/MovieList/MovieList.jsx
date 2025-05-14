import './MovieList.scss';
import { MovieCard } from '../MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
