import React from 'react';
import { render } from '@testing-library/react';
import { DraggableSpace } from './DraggableSpace';

describe('DraggableSpace Component', () => {
  describe('render DraggableItems', () => {
    it('it should render 10 boxs', () => {
      const { getAllByTestId } = render(<DraggableSpace />);
      const boxElements = getAllByTestId('box');
      expect(boxElements.length).toEqual(10);
    });

    it('it should render 10 circles', () => {
      const { getAllByTestId } = render(<DraggableSpace />);
      const circleElements = getAllByTestId('circle');
      expect(circleElements.length).toEqual(10);
    });
  });

  describe('render theme toggle button', () => {
    it('should render button', () => {
      const { getByText } = render(<DraggableSpace />);
      const toggleButton = getByText('Toggle Theme');
      expect(toggleButton).toBeTruthy();
    });
  });
});
