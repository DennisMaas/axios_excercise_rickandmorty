import React from "react";
import styled from "styled-components/macro";

import CharacterCard from "../styles/CharacterCard";

export default function CharacterInfo ({character}){
    const {name,status,gender, image} = character;

    return (
        <div>
            <CharacterCard>
                    <CharName>{name}</CharName>
                    <Image src={(image)} alt={""}/>
                    <CharStatus>
                        <p>Status: {status}</p>
                        <p>Gender: {gender}</p>
                    </CharStatus>
            </CharacterCard>
        </div>
    );
}

export const CharStatus = styled.div`

`

export const CharName = styled.h2`

`

export const Image = styled.img`
width: 20vmax;
`