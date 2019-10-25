import React, { useState } from 'react';
import { DraggableSpace } from './components/DraggableSpace/DraggableSpace';
import { Header } from './components/Header/Header';
import './App.scss';

export const themes = {
    light: {
        pink: '#DB7093',
        blue: '#70dbcb',
        green: '#80db70',
        yellow: '#dbd270',
        purple: '#b270db',
        type: 'light'
    },
    dark: {
        pink: '#97264b',
        blue: '#259382',
        green: '#2f8321',
        yellow: '#c8bb32',
        purple: '#6e279b',
        type: 'dark'
    }
};

export const ThemeContext = React.createContext([{}, () => {}]);

function App() {
    const [theme, updateTheme] = useState({...themes.light});
  return (
      <ThemeContext.Provider value={[theme, updateTheme]}>
          <div className="App">
              <Header/>
              <DraggableSpace/>
          </div>
      </ThemeContext.Provider>
  );
}

export default App;
