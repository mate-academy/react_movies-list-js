export const CardImage = ({ imgUrl }) => (
  <div className="card-image">
    <figure className="image is-4by3">
      <img data-cy="MovieImage" src={imgUrl} alt="Film logo" />
    </figure>
  </div>
);
