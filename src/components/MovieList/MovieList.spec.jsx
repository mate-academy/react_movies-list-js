/* eslint-disable react/jsx-filename-extension */
import { mount } from '@cypress/react18';
import React from 'react';
import movies from '../../api/movies.json';
import { MovieList } from './MovieList';

describe('MoviesList component', () => {
  it('should render a card per each movie', () => {
    mount(<MovieList movies={movies} />);

    cy.getByDataCy('Movie').should('have.length', 5);
  });

  it('should put movies in correct order', () => {
    mount(<MovieList movies={movies} />);

    cy.getByDataCy('MovieTitle').eq(0).should('have.text', 'Inception');
    cy.getByDataCy('MovieTitle').eq(4).should('have.text', 'The Holiday');
  });

  it('should render no movies if received an empty array', () => {
    mount(<MovieList movies={[]} />);

    cy.getByDataCy('Movie').should('not.exist');
  });
});
