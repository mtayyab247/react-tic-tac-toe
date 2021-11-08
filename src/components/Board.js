import React from 'react';
import Square from './Square';
import '../css/board.css';

const Board = () => {
    
    return(
        <div className="board">
            <Square classAttr={"bb br"} row={0} col={0} />
            <Square classAttr={"bb"} row={0} col={1} />
            <Square classAttr={"bb bl"} row={0} col={2} />
            <Square classAttr={"bb br"} row={1} col={0} />
            <Square classAttr={"bb"} row={1} col={1} />
            <Square classAttr={"bb bl"} row={1} col={2} />
            <Square classAttr={"br"} row={2} col={0} />
            <Square classAttr={""} row={2} col={1} />
            <Square classAttr={"bl"} row={2} col={2} />
        </div>
    );
};

export default Board;