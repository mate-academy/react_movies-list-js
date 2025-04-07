import './MovieList.scss';
import { MovieCard } from '../MovieCard';
import movies from '../../api/movies.json';

export const MovieList = () => (
  <div className="movies">
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
