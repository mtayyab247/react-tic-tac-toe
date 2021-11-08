import React from 'react';
import '../css/header.css';

const Header = ({playerTurn}) => {

    return(
        <div className="header">
            <div className="title-wrapper">
                <h3 className="title">Enjoy Tic Tac Toe</h3>
            </div>

            <div className="turn-info">
                <div className="turn">{playerTurn}</div>
            </div>
        </div>
    );
};

export default Header;