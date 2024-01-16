import React from 'react';

const HistorySquare = ({
  historyRecord,
  winner,
  index,
  setSquares,
  selectedHistory,
  setSelectedHistory
}) => {
  const handleClick = () => {
    if (!historyRecord) return;
    setSquares(historyRecord);
    setSelectedHistory(index);
    console.log('history set');
  };

  const selectedStyle = selectedHistory === index ? 'ring-2 ring-green-500' : null;

  return (
    <button
      onClick={handleClick}
      className={`
        w-24 
        h-24 
        text-4xl 
        font-semibold 
        text-white 
        rounded-md 
        shadow-lg 
        bg-slate-950 
        shadow-slate-900 
        hover:shadow-3xl 
        hover:ring-2 
        disabled:ring-0 
        transition 
        text-opacity-100 
        ${selectedStyle}
      `}
      disabled={!winner || !historyRecord}
    >
      {historyRecord && index + 1}
    </button>
  );
};

export default HistorySquare;
