import { MovieCard } from '../MovieCard';
import './MovieList.scss';

// export const MovieList = ({ moviesFromServer }) => (
//   <div className="movies">
//     {moviesFromServer?.map(movie => (
//       <MovieCard movie={movie} key={movie.imdbId} />
//     ))}
//   </div>
// );

export const MovieList = ({ moviesFromServer }) => {
  // Проверка наличия массива и его копирование
  const movies = moviesFromServer ? [...moviesFromServer] : [];

  // Сортировка фильмов по imdbId
  movies.sort((a, b) => a.imdbId.localeCompare(b.imdbId));

  return (
    <div className="movies">
      {movies?.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
    </div>
  );
};
