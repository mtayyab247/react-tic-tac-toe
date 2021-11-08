import React from 'react';
import Restart from './Restart';
import GameResult from './GameResult';

const Footer = () => {

    return(
        <div className="footer">
            <Restart />
            <GameResult />
        </div>
    );
};

export default Footer;