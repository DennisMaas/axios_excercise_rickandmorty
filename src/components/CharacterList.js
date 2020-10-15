import React, {useEffect, useState} from "react";
import axios from "axios";
import CharacterInfo from "./CharacterInfo";
import Pagination from "./Pagination";

export default function CharacterList(){

    const [characters, setCharacters] = useState([]);
    const [infos, setInfos] = useState([])
    const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");

    useEffect(()=> {
        axios.get(url)
            .then((response) =>
                {
                    setCharacters(response.data.results);
                    setInfos(response.data.info);
                }
            )

    }, [url]);

    function onPrev(){
        setUrl(infos.prev)
    }
    function onNext(){
        setUrl(infos.next)
    }


    return (<>
        <main>
            {
                characters.map(character => <CharacterInfo key={character.id} character={character}/>)}
        </main>
    <Pagination onNext={onNext} onPrev={onPrev}></Pagination>
        </>
);
}