import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => (
<>
  <div className='movies'>
    {movies.map(movie => {
       return <MovieCard key={movie.imdbId} movie={movie}/>
    })};
  </div>
</>
);
