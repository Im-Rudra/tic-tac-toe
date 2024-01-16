import { useState, useEffect } from 'react';
import { calculateWinner, printDecision } from '../utils';
import Coat from './GameCoat';
import HistoryCoat from './HistoryCoat';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [current, setCurrent] = useState('x'); // only x | o
  const [winner, setWinner] = useState(null); // it can be x | o | t(tie) | null
  const [history, setHistory] = useState(Array(9).fill(null));
  const [historyRound, setHistoryRound] = useState(0);
  const [selectedHistory, setSelectedHistory] = useState(null);

  // this will toggle the current (x/o)
  // if x=>o | if o=>x
  const toggleCurrent = () => {
    setCurrent((prev) => {
      if (prev === 'x') return 'o';
      else if (prev === 'o') return 'x';
    });
  };

  const handleClick = (index) => {
    // if desired element is not null.
    // or winner is set
    // then it will not allow to change the value again
    if (squares[index] || winner) return;

    //  game state setting
    const newSquares = [...squares]; // clone the original array
    newSquares[index] = current; // set desired square in the cloned array
    setSquares(newSquares); // changing the acutal squares

    //  history setting
    if (historyRound <= 8) {
      const newHistory = [...history];
      newHistory[historyRound] = newSquares;
      setHistoryRound((prev) => prev + 1);
      setHistory(newHistory);
    }
    toggleCurrent();
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setHistory(Array(9).fill(null));
    setHistoryRound(0);
    setSelectedHistory(null);
    setCurrent('x');
    setWinner(null);
  };

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      setWinner(winner);
    }
  }, [squares]);

  const statusRingStyle = () => {
    if (winner === 'x') return 'ring-4 ring-red-500';
    else if (winner === 'o') return 'ring-4 ring-green-500';
    else if (winner === 't') return 'ring-4 ring-gray-500';
    return null;
  };

  const Statusbar = () => {
    let text = null;
    if (winner === 't') {
      text = 'Tie';
    } else if (winner) {
      text = 'WINNER ' + printDecision(winner);
    } else {
      text = printDecision(current);
    }
    return <h2 className="text-slate-300 text-2xl text-center py-5">{text}</h2>;
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className={'py-4 bg-slate-950 rounded-xl drop-shadow-xl px-16  ' + statusRingStyle()}>
        <div>
          <Statusbar />
        </div>
        <div className="flex items-center justify-between gap-10">
          <Coat value={squares} handleClick={handleClick} winner={winner} />
          {winner && (
            <HistoryCoat
              history={history}
              winner={winner}
              setSquares={setSquares}
              selectedHistory={selectedHistory}
              setSelectedHistory={setSelectedHistory}
            />
          )}
        </div>
        <div className="flex justify-center my-5">
          <button
            className="bg-blue-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition-all"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Board;
