import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <div className="page-content">
    <div className="movies">
      {
        movies && movies.map(movie => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))
      }
    </div>
  </div>
);
