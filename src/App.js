import React from 'react';
import { DraggableSpace } from './components/DraggableSpace/DraggableSpace';
import { Header } from './components/Header/Header';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <DraggableSpace />
    </div>
  );
}

export default App;
