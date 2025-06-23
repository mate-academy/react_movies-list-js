// src/components/MovieCard/MovieCard.spec.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MovieCard } from './MovieCard';

describe('MovieCard component', () => {
  const movie = {
    title: 'Filme Teste',
    description: 'Descrição do filme',
    posterUrl: 'https://via.placeholder.com/150',
    imdbUrl: 'https://www.imdb.com/title/tt1234567',
    imdbId: 'tt1234567',
  };

  beforeEach(() => {
    render(<MovieCard movie={movie} />);
  });

  it('should render a movie title', () => {
    expect(screen.getByText(/filme teste/i)).toBeInTheDocument();
  });

  it('should render a movie description', () => {
    expect(screen.getByText(/descrição do filme/i)).toBeInTheDocument();
  });

  it('should have a link to IMDb page', () => {
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', movie.imdbUrl);
  });

  it('should have a movie poster', () => {
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', movie.posterUrl);
    expect(img).toHaveAttribute('alt', movie.title);
  });
});
