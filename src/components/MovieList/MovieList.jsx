import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </div>
);

// const CatList = ({ cats }) => (
//   <div class="CatList">
//     {cats.map(cat => (
//       <CatCard cat={cat}> key={cat.id} />
//     ))}
//   </div>
// );
