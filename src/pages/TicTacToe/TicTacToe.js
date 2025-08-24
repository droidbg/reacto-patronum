import React from 'react';

const TicTacToe = () => {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Square />
    </div>
  );
};

export default TicTacToe;



export function Square() {
  return <button className="square">X</button>;
}
