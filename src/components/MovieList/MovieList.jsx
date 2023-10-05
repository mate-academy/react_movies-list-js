import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <>
    {movies && movies.length && (
      <div className="movies">
        {movies.map(movie => (
          <MovieCard movie={movie} />
        ))
        }
      </div>
    )
    }
  </>
);
