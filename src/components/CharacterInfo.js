import React from "react";
import {CharacterImage} from "../styles/CharacterImage";

export default function CharacterInfo ({character}){
    const {name, image, status, gender, species, type} = character;

    return (
        <>
            <CharacterImage src={(image)} alt={""}/>
            <p>{name}</p>
            <p>Status: {status}</p>
            <p>Gender: {gender}</p>
            <p>Species: {species}</p>
            <p>Type: {type}</p>
        </>
    );
}