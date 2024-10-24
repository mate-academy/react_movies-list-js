import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        {movies.map(movie => (
          <MovieCard movie={movie} key={movie.imdbId} data-cy="Movie" />
        ))}
      </div>
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
