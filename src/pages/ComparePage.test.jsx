import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CompareCharactersPage from './ComparePage'; // Ajustez le chemin selon votre arborescence
import characters from '../data/characters.json';

describe('CompareCharactersPage', () => {
    test('renders the page title', () => {
        render(<CompareCharactersPage />);
        expect(document.title).toBe("Compare | Marvel App");
    });

    test('radar chart updates on character selection', () => {
        render(<CompareCharactersPage />);

        const selectCharacter1 = screen.getByTestId('select-character-1');
        const selectCharacter2 = screen.getByTestId('select-character-2');

        // Changer la sélection dans les menus
        fireEvent.change(selectCharacter1, { target: { value: characters[2].id } }); // Deadpool
        fireEvent.change(selectCharacter2, { target: { value: characters[3].id } }); // Groot

        // Vérifiez les changements dans le composant
        expect(selectCharacter1.value).toBe(characters[2].id);
        expect(selectCharacter2.value).toBe(characters[3].id);

        // Vérifiez que le nom des personnages apparaît dans la légende
        const legendEntries = screen.getAllByText(/Deadpool|Groot/);
        expect(legendEntries.length).toBeGreaterThanOrEqual(2);
    });
});
