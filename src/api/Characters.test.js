// Importation des fonctions à tester

import characters from '../data/characters.json';
import { getCharacterById, getCharacters } from './characters-api';

// Test pour la fonction getCharacters
describe('getCharacters', () => {
    test('doit retourner tous les personnages', () => {
        const result = getCharacters();
        expect(result).toEqual(characters); // Vérifie si le résultat est égal à la liste complète des personnages
    });

    test('doit retourner un tableau', () => {
        const result = getCharacters();
        expect(Array.isArray(result)).toBe(true); // Vérifie que le résultat est bien un tableau
    });
});

// Test pour la fonction getCharacterById
describe('getCharacterById', () => {
    test('doit retourner un personnage par son ID', () => {
        const characterId = 1; // Supposons que l'ID 1 existe
        const character = characters.find(c => c.id === characterId); // Cherche le personnage dans le fichier
        const result = getCharacterById(characterId);
        expect(result).toEqual(character); // Vérifie si le personnage retourné correspond à l'ID donné
    });

    test('doit retourner undefined pour un ID inexistant', () => {
        const nonExistentId = 999; // Un ID qui n'existe pas
        const result = getCharacterById(nonExistentId);
        expect(result).toBeUndefined(); // Vérifie que le résultat est `undefined`
    });
});
