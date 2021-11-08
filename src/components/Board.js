import React from 'react';
import Square from './Square';

const Board = () => {
    
    return(
        <div className="board">
            <Square row={0} col={0} />
            <Square row={0} col={1} />
            <Square row={0} col={2} />
            <Square row={1} col={0} />
            <Square row={1} col={1} />
            <Square row={1} col={2} />
            <Square row={2} col={0} />
            <Square row={2} col={1} />
            <Square row={2} col={2} />
        </div>
    );
};

export default Board;