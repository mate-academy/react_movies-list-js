import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieList from './MovieList'; // ✅ Corrigido: import padrão
import movies from '../../api/movies.json';

describe('MovieList component', () => {
  it('should render a card per each movie', () => {
    render(<MovieList movies={movies} />);

    const movieCards = screen.getAllByTestId('Movie');
    expect(movieCards.length).toBe(movies.length);
  });

  it('should put movies in correct order', () => {
    render(<MovieList movies={movies} />);

    const titles = screen
      .getAllByTestId('MovieTitle')
      .map(el => el.textContent);
    const sortedTitles = [...titles].sort();

    expect(titles).toEqual(sortedTitles);
  });

  it('should render no movies if received an empty array', () => {
    render(<MovieList movies={[]} />);

    const movieCards = screen.queryAllByTestId('Movie');
    expect(movieCards.length).toBe(0);
  });
});
