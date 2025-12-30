import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';
import movies from '../../api/movies.json';

export const MovieList = () => (
  <div className="movies">
    {movies.map(movi => {
      return (
        <MovieCard
          imgUrl={movi.imgUrl}
          title={movi.title}
          imdbUrl={movi.imdbUrl}
          description={movi.description}
          key={movi.imdbId}
        />
      );
    })}
  </div>
);
