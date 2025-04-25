import './MovieCard.scss';

export const MovieCard = ({ movie }) => (
  <div className="card" data-cy="movie">
    <img src={movie.imgUrl} alt={`${movie.title} logo`} className="card-img" />
    <div className="card-body">
      <h5 className="card-title">{movie.title}</h5>
      <p className="card-text">{movie.description}</p>
    </div>
  </div>
);
