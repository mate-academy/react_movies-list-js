import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = (props) => {
  const { movies } = props;

  return (
    <div className="movies">
      {movies.map(
        movie => <MovieCard movie={movie} key={movie.imdbId} />,
      )}
    </div>
  );
};
