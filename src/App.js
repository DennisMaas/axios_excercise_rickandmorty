import React from 'react';
import styled from "styled-components/macro";
import {PortalStyle} from "./styles/PortalStyles";
import {DivContainer} from "./styles/DivContainer";
import Title from "./components/Title";
import TitleMiddle from "./components/TitleMiddle";
import TitleBottom from "./components/TitleBottom";

function App() {
  return (
    <FakeBody>
        <DivContainer>
            <PortalStyle></PortalStyle>
            <Title></Title>
            <TitleMiddle></TitleMiddle>
            <TitleBottom></TitleBottom>
         </DivContainer>
    </FakeBody>
  );
}

export default App;

export const FakeBody = styled.body`
background-color: black;
font-size: 0.9vw;
`