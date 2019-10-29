import React from 'react';
import { DraggableItem } from '../DraggableItem/DraggableItem';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import './DraggableSpace.scss';

export function DraggableSpace() {
  let boxElements = [];
  let circleElements = [];
  for (let i = 1; i <= 10; i++) {
    boxElements.push(<DraggableItem type={'box'} id={'box' + i} key={'box' + i} />);
    circleElements.push(<DraggableItem type={'circle'} id={'circle' + i} key={'circle' + i} />);
  }

  return (
    <div className="draggable-space">
      <ThemeToggle />
      {boxElements}
      {circleElements}
    </div>
  );
}
