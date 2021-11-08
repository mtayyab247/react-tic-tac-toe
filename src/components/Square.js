import React from 'react';

const Square = ({handleWinner, row, col, classAttr, boardState}) => {
    return(
        <div className={classAttr}>
            <button onClick={() => handleWinner(row, col)} row={row} col={col}>
                {
                    parseInt(boardState[row][col]) > 0 ? "": boardState[row][col]
                }
            </button>
        </div>
    );
};

export default Square;