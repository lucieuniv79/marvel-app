import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Pour avoir des assertions supplémentaires
import ContactPage from './ContactPage';

// Mock de useEffect pour tester le changement de titre
beforeEach(() => {
  // Simule l'objet global `document` pour les tests
  document.title = '';
});

describe('ContactPage Component', () => {
  test('should render the contact information', () => {
    render(<ContactPage />);

    // Vérifier que le texte "Contact Us" est affiché
    expect(screen.getByText('Contact Us')).toBeInTheDocument();

    // Vérifier que l'email est correctement affiché
    expect(screen.getByText('marvelApp@gmail.com')).toBeInTheDocument();
  });

  test('should change the document title', () => {
    render(<ContactPage />);
    
    // Vérifier que le titre de la page a été changé correctement
    expect(document.title).toBe('Contact | Marvel App');
  });

  test('should have a mailto link', () => {
    render(<ContactPage />);

    // Vérifier que le lien mailto est présent avec la bonne URL
    const emailLink = screen.getByRole('link', { name: /marvelApp@gmail.com/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:marvelApp@gmail.com');
  });
});
