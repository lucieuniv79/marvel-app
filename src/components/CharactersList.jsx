import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Export de la fonction formatDate
export const formatDate = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = new Intl.DateTimeFormat('fr-FR', { month: 'long' }).format(date); // Nom complet du mois
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
};

export function CharactersList({ characters = [] }) {
    const [sortField, setSortField] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');

    const sortedCharacters = [...characters].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a[sortField] > b[sortField] ? 1 : -1;
        } else {
            return a[sortField] < b[sortField] ? 1 : -1;
        }
    });

    const handleSortFieldChange = (event) => {
        setSortField(event.target.value);
    };

    const handleSortOrderChange = (event) => {
        setSortOrder(event.target.value);
    };

    return (
        <div>
            <div>
                <label htmlFor="sortField">Trier par :</label>
                <select id="sortField" value={sortField} onChange={handleSortFieldChange}>
                    <option value="id">ID</option>
                    <option value="name">Nom</option>
                    <option value="modified">Modifié</option>
                </select>

                <label htmlFor="sortOrder">Ordre :</label>
                <select id="sortOrder" value={sortOrder} onChange={handleSortOrderChange}>
                    <option value="asc">Croissant</option>
                    <option value="desc">Décroissant</option>
                </select>
            </div>

            <ul id="characters">
                {sortedCharacters.map((character) => (
                    <li key={character.id}>
                        <Link to={`/characters/${character.id}`}>
                        <strong>{character.name}</strong> - {formatDate(character.modified)}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
