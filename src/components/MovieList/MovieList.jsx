import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => {
  return (
    <div className="movies">
      {movies &&
        movies.map(elem => <MovieCard key={elem.imdbId} movie={elem} />)}
    </div>
  );
};
