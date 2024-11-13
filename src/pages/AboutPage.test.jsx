import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutPage from './AboutPage';

// Mock de useEffect pour tester le changement de titre
beforeEach(() => {
  // Simule l'objet global `document` pour les tests
  document.title = '';
});

describe('AboutPage Component', () => {
  test('should render the About information', () => {
    render(<AboutPage />);

    // Vérifier que le titre "About Us" est affiché
    expect(screen.getByText('About Us')).toBeInTheDocument();

    // Vérifier que la description est correctement affichée
    expect(screen.getByText('We are a team of Marvel fans who love to create awesome apps !')).toBeInTheDocument();
  });

  test('should change the document title', () => {
    render(<AboutPage />);
    
    // Vérifier que le titre de la page a été changé correctement
    expect(document.title).toBe('About | Marvel App');
  });
});
