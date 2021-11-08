import React from 'react';
import Restart from './Restart';
import GameResult from './GameResult';
import '../css/footer.css';

const Footer = ({winner, playerTurn}) => {
    
    return(
        <div className="footer">
            <Restart />
            <GameResult winner={winner} playerTurn={playerTurn} />
        </div>
    );
};

export default Footer;