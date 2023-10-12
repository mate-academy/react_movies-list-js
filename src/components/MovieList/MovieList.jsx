/* eslint-disable quotes */
/* eslint-disable arrow-parens */
import "./MovieList.scss";
import { MovieCard } from "../MovieCard/MovieCard";

export const MovieList = ({ movies }) => {
  const renderedMoviesList = movies.map((movie) => (
    <MovieCard key={movie.imdbId} movie={movie} />
  ));

  return <>{renderedMoviesList}</>;
};
