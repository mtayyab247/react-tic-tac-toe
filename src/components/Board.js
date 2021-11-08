import React from 'react';
import Square from './Square';
import '../css/board.css';

const Board = ({boardState, handleWinner}) => {
    
    return(
        <div className="board">
            <Square handleWinner={handleWinner} boardState={boardState} classAttr={"bb br"} row={0} col={0} />
            <Square handleWinner={handleWinner} boardState={boardState} classAttr={"bb"} row={0} col={1} />
            <Square handleWinner={handleWinner} boardState={boardState} classAttr={"bb bl"} row={0} col={2} />
            <Square handleWinner={handleWinner} boardState={boardState} classAttr={"bb br"} row={1} col={0} />
            <Square handleWinner={handleWinner} boardState={boardState} classAttr={"bb"} row={1} col={1} />
            <Square handleWinner={handleWinner} boardState={boardState} classAttr={"bb bl"} row={1} col={2} />
            <Square handleWinner={handleWinner} boardState={boardState} classAttr={"br"} row={2} col={0} />
            <Square handleWinner={handleWinner} boardState={boardState} classAttr={""} row={2} col={1} />
            <Square handleWinner={handleWinner} boardState={boardState} classAttr={"bl"} row={2} col={2} />
        </div>
    );
};

export default Board;