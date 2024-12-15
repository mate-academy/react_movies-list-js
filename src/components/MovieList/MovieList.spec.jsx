/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { mount } from '@cypress/react18';
import { MovieList } from './MovieList';
import movies from '../../api/movies.json';

describe('MoviesList component', () => {
  it('should render a card per each movie', () => {
    mount(<MovieList movies={movies} />);

    // eslint-disable-next-line no-unused-expressions
    cy.getByDataCy('Movie').should('have.length', 5).only;
  });

  it('should put movies in correct order', () => {
    mount(<MovieList movies={movies} />);

    cy.getByDataCy('MovieTitle').eq(0).should('have.text', 'Inception');
    cy.getByDataCy('MovieTitle').eq(1).should('have.text', 'Love Actually');
    cy.getByDataCy('MovieTitle')
      .eq(2)
      .should('have.text', 'The Day After Tomorrow');
    cy.getByDataCy('MovieTitle').eq(3).should('have.text', 'Rogue One');
    cy.getByDataCy('MovieTitle').eq(4).should('have.text', 'The Holiday');
  });

  it('should render no movies if received an empty array', () => {
    mount(<MovieList movies={[]} />);

    cy.getByDataCy('Movie').should('not.exist');
  });
});
