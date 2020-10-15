import React from 'react';
import styled from "styled-components/macro";
import {PortalStyle} from "./styles/background/PortalStyles";
import {DivContainer} from "./styles/background/DivContainer";
import {TitleStyling} from "./styles/background/TitleStyling";
import {TitleMiddleStyling} from "./styles/background/TitleMiddleStyling";
import {TitleBottomStyling} from "./styles/background/TitleBottomStyling";
import {Span} from "./styles/background/Span";
import CharacterInfo from "./components/CharacterInfo";
import CharacterList from "./components/CharacterList";

function App() {
  return (
    <FakeBody>
        <DivContainer>
            <PortalStyle>
                <CharacterList></CharacterList>
            </PortalStyle>

            <TitleStyling>Rick <Span>and</Span> Morty</TitleStyling>
            <TitleMiddleStyling>Rick <Span>and</Span> Morty</TitleMiddleStyling>
            <TitleBottomStyling>Rick <Span>and</Span> Morty</TitleBottomStyling>
         </DivContainer>
    </FakeBody>
  );
}

export default App;

export const FakeBody = styled.body`
    background: url("https://source.unsplash.com/RF4p4rTM-2s/1280x720") no-repeat center fixed;
    background-size: cover;
    font-size: 0.9vw;
`