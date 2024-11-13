import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header component', () => {
  test('renders logo and navigation links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Vérifie que le logo est affiché
    const logoElement = screen.getByAltText(/Kasa Logo/i);
    expect(logoElement).toBeInTheDocument();

    // Vérifie que les liens de navigation sont présents
    expect(screen.getByText(/Accueil/i)).toBeInTheDocument();
    expect(screen.getByText(/A Propos/i)).toBeInTheDocument();
  });

  test('renders home banner with message on home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );

    // Vérifie que la bannière d'accueil s'affiche avec le bon message
    const bannerMessage = screen.getByText(/Chez vous, partout et ailleurs/i);
    expect(bannerMessage).toBeInTheDocument();
  });

  test('renders banner without message on about page', () => {
    render(
      <MemoryRouter initialEntries={['/a-propos']}>
        <Header />
      </MemoryRouter>
    );

    // Vérifie que la bannière est présente mais sans message
    const bannerElement = screen.getByTestId('banner');
    expect(bannerElement).toBeInTheDocument();
    
    const bannerMessage = screen.queryByText(/Chez vous, partout et ailleurs/i);
    expect(bannerMessage).not.toBeInTheDocument();
  });
});
