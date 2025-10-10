import './MovieCard.scss';

export const MovieCard = ({ movie }) => (
  <div className="MovieCard">
    <h3>{movie.title}</h3>
    <p>{movie.description}</p>
  </div>
);
