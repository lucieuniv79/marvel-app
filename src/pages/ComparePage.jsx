import React from 'react';
import characters from "../data/characters.json"; // Importez votre fichier JSON

const CompareCharactersPage = () => {
    // Change the title of the page
    document.title = "Compare | Marvel App";

    // Transform the characters into an array of label/value objects
    const options = characters.map((character) => ({
        value: character.id, // Utilisez l'ID comme valeur unique
        label: character.name,
    }));

    // Set the default options to the first two characters
    const [option1, setOption1] = React.useState(options[0]);
    const [option2, setOption2] = React.useState(options[1]);

    const centerStyle = {
        textAlign: 'center',
        width: 500,
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
                </select>&nbsp; {/* Fix the ambiguous spacing */}
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

            {/* Display the comparison */}
            <p style={centerStyle}>
                Comparing <strong>{option1.label}</strong> with <strong>{option2.label}</strong>
            </p>
        </>
    );
};

export default CompareCharactersPage;
