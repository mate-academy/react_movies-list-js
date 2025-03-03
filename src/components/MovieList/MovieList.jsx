import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map(item => (
        <MovieCard key={item.imdbId} movie={item}/>
      ))}
    </div>
  )
}
