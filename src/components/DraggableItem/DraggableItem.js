import React, { useState, useEffect } from 'react';
import './DraggableItem.scss';
import { fromEvent } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';

export function DraggableItem(props) {
  const colors = ['#b270db', '#DB7093', '#80db70', '#dbd270', '#70dbcb', '#db7070'];

  const [topPosition, setTopPosition] = useState(0);
  const [leftPosition, setLeftPosition] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );
  let boxElement;

  useEffect(() => {
    boxElement = document.getElementById(`${props.type}`);
    const drag$ = fromEvent(document, 'mousemove');
    const up$ = fromEvent(boxElement, 'mouseup');
    const down$ = fromEvent(boxElement, 'mousedown');

    down$
      .pipe(
        switchMap(() => {
          setBackgroundColor(colors[Math.floor(Math.random() * colors.length)]);
          return drag$.pipe(takeUntil(up$));
        })
      )
      .subscribe(event => {
        setTopPosition(event.clientY - 20);
        setLeftPosition(event.clientX - 20);
      });
  }, []);

  return (
    <div>
      <div
        id={props.type}
        className={`draggable-item ${props.type}`}
        style={{ top: `${topPosition}px`, left: `${leftPosition}px`, backgroundColor }}
      />
    </div>
  );
}
