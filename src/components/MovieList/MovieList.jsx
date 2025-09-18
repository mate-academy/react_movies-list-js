import './MovieList.scss';
import movies from '../../api/movies.json';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = () => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard
          key={movie.imdbId}
          title={movie.title}
          description={movie.description}
          imgUrl={movie.imgUrl}
          imdbUrl={movie.imdbUrl}
        />
      ))}
    </div>
  );
};
