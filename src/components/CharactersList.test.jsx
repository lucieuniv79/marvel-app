import '@testing-library/jest-dom';
import '@testing-library/react';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CharactersList } from './CharactersList';

describe('CharactersList Component', () => {

  test('should display a list with one character', () => {
    const characters = [{ id: 1, name: 'Spider-Man' }];
    render(
      <BrowserRouter>
        <CharactersList characters={characters} />
      </BrowserRouter>
    );

    // Check if the character's name is in the document
    expect(screen.getByText('Spider-Man')).toBeInTheDocument();
    // Check if the link is correct
    expect(screen.getByRole('link', { name: 'Spider-Man' })).toHaveAttribute('href', '/characters/1');
  });

  test('should display a list with multiple characters', () => {
    const characters = [
      { id: 1, name: 'Spider-Man' },
      { id: 2, name: 'Iron Man' },
      { id: 3, name: 'Hulk' }
    ];

    render(
      <BrowserRouter>
        <CharactersList characters={characters} />
      </BrowserRouter>
    );

    // Check if all character names are in the document
    expect(screen.getByText('Spider-Man')).toBeInTheDocument();
    expect(screen.getByText('Iron Man')).toBeInTheDocument();
    expect(screen.getByText('Hulk')).toBeInTheDocument();

    // Check if the links are correct
    expect(screen.getByRole('link', { name: 'Spider-Man' })).toHaveAttribute('href', '/characters/1');
    expect(screen.getByRole('link', { name: 'Iron Man' })).toHaveAttribute('href', '/characters/2');
    expect(screen.getByRole('link', { name: 'Hulk' })).toHaveAttribute('href', '/characters/3');
  });
});
