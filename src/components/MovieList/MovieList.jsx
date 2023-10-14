import { MovieCard } from '../MovieCard';
import './MovieList.scss';

const compareMoviesByDate = (movieA, movieB) => {
  const dateA = new Date(movieA.releaseDate);
  const dateB = new Date(movieB.releaseDate);

  return dateA - dateB;
};

export const MovieList = ({ moviesFromServer }) => {
  // Упорядочиваем фильмы по дате
  const orderedMovies = moviesFromServer?.sort(compareMoviesByDate);

  return (
    <div className="movies">
      {orderedMovies?.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
    </div>
  );
};
