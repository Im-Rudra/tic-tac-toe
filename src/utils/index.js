export const calculateWinner = (squares) => {
  const combinations = [
    [0, 1, 2], // horizontal 1
    [3, 4, 5], // horizontal 2
    [6, 7, 8], // horizontal 3
    [0, 3, 6], // vertical 1
    [1, 4, 7], // vertical 2
    [2, 5, 8], // vertical 3
    [0, 4, 8], // diagonal leftTop -> rightBottom
    [2, 4, 6] // diagonal righttop -> leftBottom
  ];
  let count = 0;

  for (const combination of combinations) {
    const [a, b, c] = combination;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // winner (x | o)
    }
    count += 1;
  }
  if (!squares.includes(null)) {
    return 't'; // if tie
  }
  return null;
};

export const printDecision = (xOro) => {
  // 🟢  ❌  ⭕
  if (xOro === 'x') return '❌';
  else if (xOro === 'o') return '🟢';

  return null;
};
