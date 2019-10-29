import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DraggableItem} from "./DraggableItem";
import {ThemeContext, themes} from "../../App";

describe('DraggableItem Component', () => {
    describe('on mousedown', () => {
        it('should change color', () => {
            const {getByTestId} = render(<ThemeContext.Provider value={[themes.light, () => {}]}><DraggableItem type={'box'} id={'box1'} /></ThemeContext.Provider>);
            const boxElement = getByTestId('box');
            const initialColor = boxElement.style['background-color'];
            fireEvent(boxElement, new MouseEvent('mousedown'));
            expect(boxElement.style['background-color']).not.toEqual(initialColor);
        });

        describe('on mousemove', () => {
            it('should update the left and top styles', () => {
                const {getByTestId} = render(<ThemeContext.Provider value={[themes.light, () => {}]}><DraggableItem type={'box'} id={'box1'} /></ThemeContext.Provider>);
                const boxElement = getByTestId('box');
                const initialLeft = boxElement.style.left;
                const initialTop = boxElement.style.top;
                fireEvent(boxElement, new MouseEvent('mousedown'));
                fireEvent.mouseMove(boxElement, {clientX: 100, clientY: 100});
                expect(boxElement.style.top).not.toEqual(initialTop);
                expect(boxElement.style.left).not.toEqual(initialLeft);
            });
        });
    });
});