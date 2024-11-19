import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function CharactersList({ characters = [] }) {
    // État pour le champ de tri sélectionné (id, name, modified)
    const [sortField, setSortField] = useState('name');

    // État pour l'ordre de tri (ascendant ou descendant)
    const [sortOrder, setSortOrder] = useState('asc');

    // Fonction pour trier les personnages en fonction du champ et de l'ordre sélectionnés
    const sortedCharacters = [...characters].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a[sortField] > b[sortField] ? 1 : -1;
        } else {
            return a[sortField] < b[sortField] ? 1 : -1;
        }
    });

    // Gestionnaires pour changer le champ de tri et l'ordre
    const handleSortFieldChange = (event) => {
        setSortField(event.target.value);
    };

    const handleSortOrderChange = (event) => {
        setSortOrder(event.target.value);
    };

    return (
        <div>
            <div>
                {/* Liste déroulante pour sélectionner le champ de tri */}
                <label htmlFor="sortField">Trier par :</label>
                <select id="sortField" value={sortField} onChange={handleSortFieldChange}>
                    <option value="id">ID</option>
                    <option value="name">Nom</option>
                    <option value="modified">Modifié</option>
                </select>

                {/* Liste déroulante pour choisir l'ordre de tri */}
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
                            {character.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
