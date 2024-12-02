import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';

// Mock de la fonction formatDate
jest.mock('./CharactersList', () => ({
    formatDate: (isoString) => {
        const date = new Date(isoString);
        return `${date.getDate()} mois-test ${date.getFullYear()}`; // Exemple simplifié pour les tests
    },
}));

describe('CharacterDetail Component', () => {
    test('should display character image when thumbnail is provided', () => {
        const character = {
            name: 'Spider-Man',
            description: 'A hero with spider-like abilities.',
            thumbnail: {
                path: 'http://example.com/image',
                extension: 'jpg',
            },
            modified: '2024-01-01T12:00:00Z',
        };

        render(<CharacterDetail character={character} />);

        // Vérifier si l'image est affichée avec le bon src et alt
        const image = screen.getByAltText('Spider-Man');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'http://example.com/image/standard_large.jpg');
    });

    test('should display the correct description and formatted modification date when provided', () => {
        const character = {
            name: 'Thor',
            description: 'The god of thunder.',
            thumbnail: null,
            modified: '2024-05-15T14:30:00Z',
        };

        render(<CharacterDetail character={character} />);

        // Vérifier si la description correcte est affichée
        expect(screen.getByText('The god of thunder.')).toBeInTheDocument();
        // Vérifier si la date de modification formatée correcte est affichée
        expect(screen.getByText('15 mois-test 2024')).toBeInTheDocument(); // Vérifie le formatage avec le mock
    });
});
