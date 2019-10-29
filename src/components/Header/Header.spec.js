import React from 'react';
import {render} from '@testing-library/react'
import {Header} from "./Header";

describe('Header Component', () => {
    it('should match snapshot', () => {
        const container = render(<Header/>);
        expect(container).toMatchSnapshot();
    });

    it('should render text drag-it', () => {
        const {getByText} = render(<Header/>);
        expect(getByText('drag-it')).toBeTruthy();
    });
});