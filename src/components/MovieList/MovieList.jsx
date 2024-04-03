import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => {
  return (
    <div className="page">
      <div className="page-content">
        <div className="movies">
          {movies.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
        <div className="sidebar" data-cy="Sidebar">
          Sidebar will be here
        </div>
      </div>
    </div>
  );
};
