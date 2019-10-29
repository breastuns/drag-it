import React from 'react';
import {render} from '@testing-library/react'
import {ThemeToggle} from "./ThemeToggle";


describe('ThemeToggle Component', () => {
    it('should match snapshot', () => {
        const container = render(<ThemeToggle/>);
        expect(container).toMatchSnapshot();
    });

    it('should render button with Toggle Theme', () => {
        const {getByText} = render(<ThemeToggle/>);
        const toggleButton = getByText('Toggle Theme');
        expect(toggleButton).toBeTruthy();
    });
});