# Movies List

> DON'T use Typescirpt in this task

You are given movies loaded from the API and initial markup. Your task is to:

1. Render movies from a given `moviesFromServer` array (for the simplicity, you can do it inside the `App` and split later).
1. Extract a `.movies` block to a `MovieList` component.
1. The `App` should pass the `moviesFromServer` to the `MovieList` as a `movies` prop.
1. Extract a `.card` block to a `MovieCard` component.
1. The `MovieList` should pass a `movie` to the `MovieCard`.
1. Use `movie.imdbId` as a key.
1. Keep all `data-cy` attributes to pass the tests.

- [DEMO LINK](https://antonmolchanov18.github.io/react_movies-list-js/)
