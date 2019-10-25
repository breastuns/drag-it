import React, {useContext} from 'react';
import {ThemeContext, themes} from "../../App";
import './ThemeToggle.scss';

export function ThemeToggle() {
    const [state, setState] = useContext(ThemeContext);

    return (
        <div className="button-container">
            <button onClick={() => {
                return setState(state => ({ ...state, ...(state.type === 'light' ? themes.dark : themes.light)}));
            }}>Toggle Theme</button>
        </div>
    );
}