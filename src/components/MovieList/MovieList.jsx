import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ moviesFromServer }) => {
  // Сортировка фильмов по imdbId
  const sortedMovies = [...moviesFromServer]
    .sort((a, b) => a.imdbId.localeCompare(b.imdbId));

  return (
    <div className="movies">
      {sortedMovies.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
    </div>
  );
};
