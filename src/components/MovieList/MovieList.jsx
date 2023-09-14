import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => (
  <>
    <div className="movies">
      {movies.map(el => (
        <MovieCard
          key={el.imdbId}
          movie={el}
        />
      ))}
    </div>
  </>
);
