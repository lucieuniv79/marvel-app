import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { CharactersList } from './CharactersList';

describe('CharactersList Component', () => {

  test('should display a list sorted by name in ascending order', () => {
    const characters = [
      { id: 1, name: 'Spider-Man', modified: '2024-01-01T12:00:00Z' },
      { id: 2, name: 'Iron Man', modified: '2024-02-02T12:00:00Z' },
      { id: 3, name: 'Hulk', modified: '2024-03-03T12:00:00Z' }
    ];

    render(
      <BrowserRouter>
        <CharactersList characters={characters} />
      </BrowserRouter>
    );

    // Vérifie que les personnages sont initialement triés par nom (ordre croissant)
    const sortedItems = screen.getAllByRole('listitem');
    expect(sortedItems[0]).toHaveTextContent('Hulk');
    expect(sortedItems[1]).toHaveTextContent('Iron Man');
    expect(sortedItems[2]).toHaveTextContent('Spider-Man');
  });

  test('should sort the list by ID when the ID option is selected', async () => {
    const characters = [
      { id: 1, name: 'Spider-Man', modified: '2024-01-01T12:00:00Z' },
      { id: 3, name: 'Iron Man', modified: '2024-02-02T12:00:00Z' },
      { id: 2, name: 'Hulk', modified: '2024-03-03T12:00:00Z' }
    ];

    render(
      <BrowserRouter>
        <CharactersList characters={characters} />
      </BrowserRouter>
    );

    // Changer le critère de tri à "ID"
    fireEvent.change(screen.getByLabelText('Trier par :'), {
      target: { value: 'id' },
    });

    // Attendre que les éléments soient triés et vérifier l'ordre des éléments
    await waitFor(() => {
      const sortedByIdItems = screen.getAllByRole('listitem');
      expect(sortedByIdItems[0]).toHaveTextContent('Spider-Man');
      expect(sortedByIdItems[1]).toHaveTextContent('Hulk');
      expect(sortedByIdItems[2]).toHaveTextContent('Iron Man');
    });
  });

  test('should sort the list by modification date when "modified" option is selected', async () => {
    const characters = [
      { id: 1, name: 'Spider-Man', modified: '2024-01-01T12:00:00Z' },
      { id: 2, name: 'Iron Man', modified: '2024-02-02T12:00:00Z' },
      { id: 3, name: 'Hulk', modified: '2024-03-03T12:00:00Z' }
    ];

    render(
      <BrowserRouter>
        <CharactersList characters={characters} />
      </BrowserRouter>
    );

    // Changer le critère de tri à "modifié"
    fireEvent.change(screen.getByLabelText('Trier par :'), {
      target: { value: 'modified' },
    });

    // Attendre que les éléments soient triés et vérifier l'ordre des éléments
    await waitFor(() => {
      const sortedByModifiedItems = screen.getAllByRole('listitem');
      expect(sortedByModifiedItems[0]).toHaveTextContent('Spider-Man');
      expect(sortedByModifiedItems[1]).toHaveTextContent('Iron Man');
      expect(sortedByModifiedItems[2]).toHaveTextContent('Hulk');
    });
  });

  test('should sort the list in descending order when "Décroissant" is selected', async () => {
    const characters = [
      { id: 1, name: 'Spider-Man', modified: '2024-01-01T12:00:00Z' },
      { id: 2, name: 'Iron Man', modified: '2024-02-02T12:00:00Z' },
      { id: 3, name: 'Hulk', modified: '2024-03-03T12:00:00Z' }
    ];

    render(
      <BrowserRouter>
        <CharactersList characters={characters} />
      </BrowserRouter>
    );

    // Changer l'ordre à "Décroissant"
    fireEvent.change(screen.getByLabelText('Ordre :'), {
      target: { value: 'desc' },
    });

    // Vérifier si les personnages sont triés dans l'ordre décroissant
    const sortedDescendingItems = screen.getAllByRole('listitem');
    expect(sortedDescendingItems[0]).toHaveTextContent('Spider-Man');
    expect(sortedDescendingItems[1]).toHaveTextContent('Iron Man');
    expect(sortedDescendingItems[2]).toHaveTextContent('Hulk');
  });

});
