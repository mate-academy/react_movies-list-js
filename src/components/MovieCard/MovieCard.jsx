import { CardImage } from './components/CardImage';
import { Media } from './components/Media';
import './MovieCard.scss';

export const MovieCard = ({
  movie: { title, description, imgUrl, imdbUrl },
}) => (
  <div className="card" data-cy="Movie">
    <CardImage imgUrl={imgUrl} />

    <div className="card-content">
      <Media title={title} />

      <div className="content">
        <p data-cy="MovieDescription">{description}</p>

        <a href={imdbUrl} data-cy="MovieLink">
          IMDB
        </a>
      </div>
    </div>
  </div>
);
