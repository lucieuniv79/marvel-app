import React from 'react';
import characters from "../data/characters.json"; // Importez votre fichier JSON
import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    Legend,
} from 'recharts';

const CompareCharactersPage = () => {
    document.title = "Compare | Marvel App";

    const options = characters.map((character) => ({
        value: character.id,
        label: character.name,
    }));

    const [option1, setOption1] = React.useState(options[0]);
    const [option2, setOption2] = React.useState(options[1]);

    // Trouver les détails des personnages sélectionnés
    const character1 = characters.find((char) => char.id === option1.value);
    const character2 = characters.find((char) => char.id === option2.value);

    // Créer les données pour le radar chart
    const radarData = [
        {
            attribute: 'Force',
            [character1.name]: character1.capacities.force,
            [character2.name]: character2.capacities.force,
        },
        {
            attribute: 'Intelligence',
            [character1.name]: character1.capacities.intelligence,
            [character2.name]: character2.capacities.intelligence,
        },
        {
            attribute: 'Durability',
            [character1.name]: character1.capacities.durability,
            [character2.name]: character2.capacities.durability,
        },
        {
            attribute: 'Energy',
            [character1.name]: character1.capacities.energy,
            [character2.name]: character2.capacities.energy,
        },
        {
            attribute: 'Speed',
            [character1.name]: character1.capacities.speed,
            [character2.name]: character2.capacities.speed,
        },
        {
            attribute: 'Fighting',
            [character1.name]: character1.capacities.fighting,
            [character2.name]: character2.capacities.fighting,
        },
    ];

    const centerStyle = {
        textAlign: 'center',
        width: 500,
        margin: '0 auto',
    };

    return (
        <>
            <h2>Compare Characters</h2>

            <p style={centerStyle}>
                <select
                    data-testid='select-character-1'
                    value={option1.value}
                    onChange={(event) =>
                        setOption1(options.find(opt => opt.value === event.target.value))
                    }
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>&nbsp;
                with&nbsp;
                <select
                    data-testid='select-character-2'
                    value={option2.value}
                    onChange={(event) =>
                        setOption2(options.find(opt => opt.value === event.target.value))
                    }
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </p>

            <div style={{ margin: '20px auto', textAlign: 'center' }}>
                <RadarChart
                    cx={300}
                    cy={250}
                    outerRadius={150}
                    width={600}
                    height={500}
                    data={radarData}
                >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="attribute" />
                    <PolarRadiusAxis />
                    <Radar
                        name={character1.name}
                        dataKey={character1.name}
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6} // Opacité pour remplir la zone
                    />
                    <Radar
                        name={character2.name}
                        dataKey={character2.name}
                        stroke="#82ca9d"
                        fill="#82ca9d"
                        fillOpacity={0.6} // Opacité pour remplir la zone
                    />
                    <Legend />
                </RadarChart>
            </div>
        </>
    );
};

export default CompareCharactersPage;
