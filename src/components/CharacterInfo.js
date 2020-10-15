import React from "react";
import {CharacterCard} from "../styles/CharacterCard";

export default function CharacterInfo ({character}){
    const {name,status,gender, image} = character;

    return (
        <div>

                    {name}
                    <img src={(image)} alt={""}/>
                        <p>Status: {status}</p>
                        <p>Gender: {gender}</p>


        </div>
    );
}