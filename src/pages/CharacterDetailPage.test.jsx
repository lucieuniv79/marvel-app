import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import CharacterDetailPage from './CharacterDetailPage';
import CharacterDetail from '../components/CharacterDetail';

// Mock de CharacterDetail pour simplifier le test
jest.mock('../components/CharacterDetail', () => {
  return ({ character }) => (
    <div data-testid="character-detail-mock">
      Character Detail for: {character.name}
    </div>
  );
});

// Mock de useLoaderData pour simuler les données de chargement du personnage
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLoaderData: jest.fn(),
}));

describe('CharacterDetailPage Component', () => {
  const mockCharacterData = {
    id: 1,
    name: 'Spider-Man',
    description: 'A superhero with spider-like abilities.',
  };

  beforeEach(() => {
    // Simule les données du personnage pour useLoaderData
    require('react-router-dom').useLoaderData.mockReturnValue(mockCharacterData);
  });

  test('should render character name correctly', () => {
    render(
      <MemoryRouter>
        <CharacterDetailPage />
      </MemoryRouter>
    );

    // Vérifier que le nom du personnage est affiché correctement
    expect(screen.getByText('Spider-Man')).toBeInTheDocument();
  });

  test('should render CharacterDetail component with character data', () => {
    render(
      <MemoryRouter>
        <CharacterDetailPage />
      </MemoryRouter>
    );

    // Vérifier que le composant CharacterDetail est rendu avec les bonnes données
    expect(screen.getByTestId('character-detail-mock')).toHaveTextContent('Character Detail for: Spider-Man');
  });
});
