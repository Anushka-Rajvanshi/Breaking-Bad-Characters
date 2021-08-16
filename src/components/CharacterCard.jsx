import React from "react";

function CharacterCard(props) {

    const loadCharacter = () => props.getCharacterName(props.data.name);

    return (
            <div className="col-lg-3 col-md-4 col-sm-6 card" onClick={loadCharacter}>
            <img src={props.data.img} alt="img" className="characterImg"></img>
            <h3 className="characterName">{props.data.name}</h3>
        </div>
    )
}

export default CharacterCard
