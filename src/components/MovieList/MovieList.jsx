import './MovieList.scss';
import {MovieCard} from '../MovieCard/MovieCard.jsx';

export const MovieList = ({movies}) => {
    return(
        <>
            <div className="movies">
                {
                    movies.map(movie => {
                        return (
                            <MovieCard movie={movie} />
                        )
                    })
                }
            </div>
        </>
    )
}
