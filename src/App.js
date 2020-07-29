import React from 'react';
import './App.css';
import Header from "./Header.jsx";
import List from "./List.jsx";
import ItemControl from './TextBox';

function App() {
  return (
    <div className="App">
     <Header />
     <List />
     <ItemControl />
    </div>
  );
}

export default App;
