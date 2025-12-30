import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(movi => {
      return <MovieCard key={movi.imdbId} movie={movi} />;
    })}
  </div>
);
