import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ moviesFromServer }) => (
  <div className="movies">
    {moviesFromServer.map(movie => (
      <MovieCard
        imgUrl={movie.imgUrl}
        title={movie.title}
        description={movie.description}
        imdbUrl={movie.imdbUrl}
        key={movie.imdbId}
      />
    ))}
  </div>
);
