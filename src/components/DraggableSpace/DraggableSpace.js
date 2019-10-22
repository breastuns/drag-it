import React from 'react';
import { DraggableItem } from '../DraggableItem/DraggableItem'
import './DraggableSpace.scss';

export function DraggableSpace () {
    return (
        <div className="draggable-space">
            <DraggableItem type={'circle'}/>
            <DraggableItem type={'box'}/>
        </div>
    );
}