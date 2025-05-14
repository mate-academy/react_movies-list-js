import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        title={movie.title}
        description={movie.description}
        imageUrl={movie.imgUrl}
        imdbUrl={movie.imdbUrl}
        key={movie.id}
      />
    ))}
  </div>
);
