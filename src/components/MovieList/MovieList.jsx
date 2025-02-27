import './MovieList.scss'
import { MovieCard } from '../MovieCard'

export const MovieList = ({moviesFromServer = []}) => {
  return (
    <div className="movies">
      {moviesFromServer?.length > 0 && (
        moviesFromServer.map(movie => (
          <MovieCard movie={movie} key={movie.imdbId} />
        ))
      )}
    </div>
  )
}
