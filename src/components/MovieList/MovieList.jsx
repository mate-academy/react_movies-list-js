import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map(movie => {
        const { imdbId, ...otherProps } = movie;

        return <MovieCard key={imdbId} movie={otherProps} />;
      })}
    </div>
  );
};
