import React from 'react';

import './App.css';
import CharacterList from "./components/CharacterList";
import HeaderSet from "./components/HeaderSet";
import Pagination from "./components/Pagination";

function App() {
  return (
    <div>
        <HeaderSet></HeaderSet>
     <CharacterList></CharacterList>
        <Pagination></Pagination>
    </div>
  );
}

export default App;
