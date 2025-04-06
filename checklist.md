1. ADD a `key` to the root tag inside an iteration (the first tag after the `.map` call)
2. DON't add keys to any other tags
3. NEVER use array index as a `key` (it is the default behaviour)

BAD EXAMPLE:
```jsx
const CatCard = ({ cat }) => (
  <div key={cat.id}>
    {cat.name}
  </div>
);

const CatList = ({ cats }) => (
  <div class="CatList">
    {cats.map(cat => (
      <CatCard cat={cat}> />
    ))}
  </div>
);
```

GOOD EXAMPLE:
```jsx
const CatCard = ({ cat }) => (
  <div>
    {cat.name}
  </div>
);

const CatList = ({ cats }) => (
  <div class="CatList">
    {cats.map(cat => (
      <CatCard cat={cat}> key={cat.id} />
    ))}
  </div>
);
```
<!-- <div className="card" data-cy="Movie">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                data-cy="MovieImage"
                src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
                alt="Film logo"
              />
            </figure>
          </div>

          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src="images/imdb-logo.jpeg" alt="imdb" />
                </figure>
              </div>

              <div className="media-content">
                <p className="title is-8" data-cy="MovieTitle">
                  Inception
                </p>
              </div>
            </div>

            <div className="content">
              <p data-cy="MovieDescription">
                Follows the lives of eight very different couples in dealing
                with their love lives in various loosely interrelated tales all
                set during a frantic month before Christmas in London, England.
              </p>

              <a
                href="https://www.imdb.com/title/tt1375666"
                data-cy="MovieLink"
              >
                IMDB
              </a>
            </div>
          </div>
        </div> -->
