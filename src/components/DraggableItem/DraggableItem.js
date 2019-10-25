import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../App';
import './DraggableItem.scss';
import { fromEvent } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';

export function DraggableItem(props) {
  const [theme, setTheme] = useContext(ThemeContext);
  const colorsArray = ['pink', 'blue', 'purple', 'green', 'yellow'];
  const getRandomColor = () => {
    return colorsArray[Math.floor(Math.random() * colorsArray.length)];
  };
  const getRandomTopPosition = () => {
    return Math.floor(Math.random() * (document.body.offsetHeight - 70));
  };
  const getRandomLeftPosition = () => {
    return Math.floor(Math.random() * (document.body.offsetWidth - 70));
  };

  const [topPosition, setTopPosition] = useState(getRandomTopPosition());
  const [leftPosition, setLeftPosition] = useState(getRandomLeftPosition());
  const randomColor = getRandomColor();
  const [backgroundColor, setBackgroundColor] = useState({
    colorValue: theme[randomColor],
    colorName: randomColor
  });

  useEffect(
    () => {
      setBackgroundColor({
        colorValue: theme[backgroundColor.colorName],
        colorName: backgroundColor.colorName
      });
      const boxElement = document.getElementById(`${props.id}`);
      const drag$ = fromEvent(document, 'mousemove');
      const up$ = fromEvent(boxElement, 'mouseup');
      const down$ = fromEvent(boxElement, 'mousedown');

      const subscriber = down$
        .pipe(
          switchMap(() => {
            const randomColor = getRandomColor();
            setBackgroundColor({ colorValue: theme[randomColor], colorName: randomColor });
            return drag$.pipe(takeUntil(up$));
          })
        )
        .subscribe(event => {
          setTopPosition(event.clientY - 20);
          setLeftPosition(event.clientX - 20);
        });

      return () => {
        subscriber.unsubscribe();
      };
    },
    [theme]
  );

  return (
    <div>
      <div
        id={props.id}
        className={`draggable-item ${props.type}`}
        style={{
          top: `${topPosition}px`,
          left: `${leftPosition}px`,
          backgroundColor: backgroundColor.colorValue
        }}
      />
    </div>
  );
}
