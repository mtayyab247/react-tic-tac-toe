import React from 'react';
import Header from './Header';
import Board from './Board';
import Footer from './Footer';

function Tictactoe() {
  return (
    <div className="ttt-wrapper">
      <Header />
      <Board />
      <Footer />
    </div>
  );
}

export default Tictactoe;
