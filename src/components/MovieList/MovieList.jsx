/* eslint-disable prettier/prettier */
import { MovieCard } from '../MovieCard/MovieCard';
import moviesJSON from '../../api/movies.json';
import './MovieList.scss';

export const MovieList = ({ movies = moviesJSON }) => {
  return (
    <div className="movies">
        {(movies.length > 0) ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.imdbId}
              movie={movie}
            />
          ))
        ) : (
          null
        )}
    </div>
  );
};
