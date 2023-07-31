import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies && movies.map(movie => (
      <MovieCard
        title={movie.title}
        description={movie.description}
        url={movie.imgUrl}
        id={movie.imdbId}
        key={movie.imdbId}
      />
    ))}
  </div>
);
