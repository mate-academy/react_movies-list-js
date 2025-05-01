import './MovieCard.scss';

export const MovieCard = ({ movie }) => (
  <div className="card" data-cy="movieCard">
    <h3>{movie.title}</h3>
    <p>{movie.description}</p>
    {/* додаткові поля за потреби */}
  </div>
);
