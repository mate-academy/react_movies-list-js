import './MovieCard.scss';

export const MovieCard = ({ movie }) => {
  const { title, description, imgUrl } = movie;

  return (
    <div className="card" data-cy="Movie">
      <img data-cy="MovieImage" src={imgUrl} alt={title} />
      <h2 data-cy="MovieTitle">{title}</h2>
      <p data-cy="MovieDescription">{description}</p>
      <a href={movie.imdbUrl} data-cy="MovieLink">
        {title}
      </a>
    </div>
  );
};
