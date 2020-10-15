import React, {useEffect, useState} from "react";
import axios from "axios";
import CharacterInfo from "./CharacterInfo";


export default function CharacterList(){

    const [characters, setCharacters] = useState([]);
    const [infos, setInfos] = useState([])
    useEffect(()=> {
        let url = "https://rickandmortyapi.com";
        axios.get(url + "/api/character")
            .then((response) =>
                {
                    setCharacters(response.data.results);
                    setInfos(response.data.info);
                }
            )

    }, []);

    return (
        <main>
            {
                characters.map(character => <CharacterInfo key={character.id} character={character}/>)}
        </main>);
}