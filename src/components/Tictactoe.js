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

  const [selectionCount, setSelectionCount] = useState(1);
  const [playerTurn, setPlayerTurn] = useState("Player 1");
  const [winner, setWinner] = useState(false);

  const handleWinner = () => {

  };

  return (
    <div className="ttt-wrapper">
      <Header playerTurn={playerTurn} />
      <Board boardState={boardState} handleWinner={handleWinner} />
      <Footer />
    </div>
  );
}

export default Tictactoe;
