import React, {useState} from 'react';
import Header from './Header';
import Board from './Board';
import Footer from './Footer';

function Tictactoe() {

  const [boardState, setBoardState] = useState(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
  );

  return (
    <div className="ttt-wrapper">
      <Header />
      <Board boardState={boardState} />
      <Footer />
    </div>
  );
}

export default Tictactoe;
