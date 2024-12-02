import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map(data => (
        <MovieCard key={data.imdbId} movie={data} />
      ))}
    </div>
  );
};
