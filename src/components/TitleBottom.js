import React from "react";

import styled from "styled-components/macro";

export default function TitleBottom () {
    return <TitleBottomStyling>Rick and Morty</TitleBottomStyling>
}
export const TitleBottomStyling = styled.div`
  position: absolute;
  bottom: 0.8em;
  width: 100%;
  text-align: center;
  font-family: 'Get Schwifty', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 10em;
  color: #08BAE3;
  -webkit-text-stroke: 0.4em black;
  z-index: 48;
`