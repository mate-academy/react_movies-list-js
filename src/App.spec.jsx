// src/App.spec.jsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MovieCard } from './components/MovieCard/MovieCard';

test('exibe o título do filme', () => {
  const movie = {
    title: 'Título de Teste',
    description: 'Descrição de Teste',
    posterUrl: 'https://via.placeholder.com/150',
    imdbUrl: 'https://www.imdb.com/title/tt1234567',
    imdbId: 'tt1234567',
  };

  render(<MovieCard movie={movie} />);

  expect(screen.getByText(/título de teste/i)).toBeInTheDocument();
});
