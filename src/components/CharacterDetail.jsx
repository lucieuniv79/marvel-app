// src/components/CharacterDetail.jsx
import PropTypes from 'prop-types';

function CharacterDetail({ character = {} }) {
    return (
        <div>            
            <h2>{character.name}</h2>
            {
                // if character.thumbnail is not null, then render the image
                character.thumbnail && <img src={`${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`} alt={character.name} />
            }
            <p>{character.description}</p>
            <p>{character.modified}</p>
        </div>
    );
}

CharacterDetail.propTypes = {
    character: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        modified: PropTypes.string,
        thumbnail: PropTypes.shape({
            path: PropTypes.string,
            extension: PropTypes.string,
        }),
    }),
};

export default CharacterDetail;