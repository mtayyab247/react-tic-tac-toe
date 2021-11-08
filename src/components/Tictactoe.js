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

  const handleWinner = (row, col) => {
    if(winner) return;

    setSelectionCount(selectionCount + 1);

    if(playerTurn === "Player 1") {
      boardState[row][col] = "X";
      setBoardState(boardState);
    } else if(playerTurn === "Player 2"){
      boardState[row][col] = "O";
      setBoardState(boardState);
    }
  
    let j;
    let match = true;
    let squareStatus;
  
    for(let i = 0; i < 3; i++) {
      match = true;
      squareStatus = boardState[i][0];
      
      for(j = 0; j < 3; j++) {
        if(squareStatus !== boardState[i][j]) {
          match = false;
        }
      }
        
      if(match) {
        break;
      }
    }
  
    if(!match) {
      for(let i = 0; i < 3; i++) {
        match = true;
        squareStatus = boardState[0][i];
        for(j = 0; j < 3; j++) {
          if(squareStatus !== boardState[j][i]) {
            match = false;
          }
        }

        if(match === true) {
          break;
        }
      }
    }
  
    if(!match) {
      if((boardState[0][0] === boardState[1][1] && boardState[1][1] === boardState[2][2]) ||
        (boardState[0][2] === boardState[1][1] && boardState[1][1] === boardState[2][0])) {
        match = true;
      }
    }

    if(selectionCount === 9 && !match) {
      setWinner("draw");
    } else if(match) {
      setWinner(true);
    }

    if(playerTurn === "Player 1") {
      setPlayerTurn("Player 2");
    } else if(playerTurn === "Player 2"){
      setPlayerTurn("Player 1");
    }
  };

  return (
    <div className="ttt-wrapper">
      <Header playerTurn={playerTurn} />
      <Board boardState={boardState} handleWinner={handleWinner} />
      <Footer winner={winner} playerTurn={playerTurn} />
    </div>
  );
}

export default Tictactoe;
