import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import About from '../components/About';

describe('About component', () => {
    test('renders all collapsible headers', () => {
      render(<About />);
  
      // Vérifie la présence des titres des sections
      expect(screen.getByText(/Fiabilité/i)).toBeInTheDocument();
      expect(screen.getByText(/Respect/i)).toBeInTheDocument();
      expect(screen.getByText(/Service/i)).toBeInTheDocument();
      expect(screen.getByText(/Sécurité/i)).toBeInTheDocument();
    });
  
    test('toggles the "Fiabilité" section content', () => {
      render(<About />);
  
      // Vérifie que le contenu de "Fiabilité" n'est pas visible au départ
      expect(screen.queryByText(/Les annonces postées sur Kasa garantissent une fiabilité totale./i)).not.toBeInTheDocument();
  
      // Simule un clic pour ouvrir la section "Fiabilité"
      fireEvent.click(screen.getByText(/Fiabilité/i));
  
      // Vérifie que le contenu de "Fiabilité" est maintenant visible
      expect(screen.getByText(/Les annonces postées sur Kasa garantissent une fiabilité totale./i)).toBeInTheDocument();
    });
  });
