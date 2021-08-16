import React from 'react'; 
import NoResultPage from "./NoResultPage";
import CharacterCard from "./CharacterCard";

function Page({items, noResult, getCharacter}) {
    
    return noResult ? <NoResultPage /> : <div className="page">
    {items.map((item) => <CharacterCard data={item} key={item.char_id} getCharacterName={(character) => getCharacter(character)} /> )}
    </div>
}

export default Page
