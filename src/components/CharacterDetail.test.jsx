import '@testing-library/jest-dom';
import '@testing-library/react';

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CharacterDetail from './CharacterDetail';

describe('CharacterDetail Component', () => {
  test('should display character image when thumbnail is provided', () => {
    const character = {
      name: 'Spider-Man',
      description: 'A hero with spider-like abilities.',
      thumbnail: {
        path: 'http://example.com/image',
        extension: 'jpg'
      },
      modified: '2024-01-01T12:00:00Z'
    };

    render(<CharacterDetail character={character} />);

    // Vérifier si l'image est affichée avec le bon src et alt
    const image = screen.getByAltText('Spider-Man');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'http://example.com/image/standard_large.jpg');
  });

  test('should display "No description available." when description is missing', () => {
    const character = {
      name: 'Iron Man',
      description: '',
      thumbnail: null,
      modified: '2024-01-01T12:00:00Z'
    };

    render(<CharacterDetail character={character} />);

    // Vérifier si le texte par défaut est affiché
    expect(screen.getByText('No description available.')).toBeInTheDocument();
  });

  test('should display "No modification date available." when modified date is missing', () => {
    const character = {
      name: 'Hulk',
      description: 'A green-skinned hero with immense strength.',
      thumbnail: null,
      modified: ''
    };

    render(<CharacterDetail character={character} />);

    // Vérifier si le texte par défaut pour la date de modification est affiché
    expect(screen.getByText('No modification date available.')).toBeInTheDocument();
  });

  test('should display the correct description and modification date when provided', () => {
    const character = {
      name: 'Thor',
      description: 'The god of thunder.',
      thumbnail: null,
      modified: '2024-05-15T14:30:00Z'
    };

    render(<CharacterDetail character={character} />);

    // Vérifier si la description correcte est affichée
    expect(screen.getByText('The god of thunder.')).toBeInTheDocument();
    // Vérifier si la date de modification correcte est affichée
    expect(screen.getByText('2024-05-15T14:30:00Z')).toBeInTheDocument();
  });
});
