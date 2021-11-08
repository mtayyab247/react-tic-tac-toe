import React from 'react';

const GameResult = ({winner, playerTurn}) => {
    return(
        <div className="winner-wrapper">
            <h4>
                {winner === "draw" ? winner: !winner ? "": playerTurn + " won!"}
            </h4>
        </div>
    );
};

export default GameResult;