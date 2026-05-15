import './MovieCard.scss';

export const MovieCard = ({ movie }) => (
  <div className='card'>
  <p>{movie.title}</p>
  <p>{movie.description}</p>

  <img src={movie.imgUrl}/>
  <a href={movie.imdbUrl}></a>
  </div>
);
