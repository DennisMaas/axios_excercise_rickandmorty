import React from 'react';

import './App.css';
import CharacterList from "./components/CharacterList";
import HeaderSet from "./components/HeaderSet";

function App() {
  return (
    <div>
        <HeaderSet></HeaderSet>
        <CharacterList></CharacterList>
    </div>
  );
}

export default App;
