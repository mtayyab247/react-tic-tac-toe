import React from 'react';
import Restart from './Restart';
import GameResult from './GameResult';
import '../css/footer.css';

const Footer = ({winner, playerTurn, handleFinish, selectionCount}) => {
    return(
        <div className="footer">
            <Restart handleFinish={handleFinish} selectionCount={selectionCount} />
            <GameResult winner={winner} playerTurn={playerTurn} />
        </div>
    );
};

export default Footer;