import React from 'react';
import HistorySquare from './HistorySquare';

const HistoryCoat = (props) => {
  const { history, ...rest } = props;
  return (
    <div className="transition-all">
      <h3 className="text-center text-2xl font-semibold text-slate-300 pb-3">History</h3>
      <div className="grid grid-cols-3 p-4 gap-4 bg-slate-800 rounded-md shadow-inner ring-2 ring-slate-600">
        {history.map((historyRecord, index) => (
          <HistorySquare key={index} index={index} historyRecord={historyRecord} {...rest} />
        ))}
      </div>
    </div>
  );
};

export default HistoryCoat;
