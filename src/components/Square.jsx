import { printDecision } from '../utils';

const Square = ({ index, value = null, handleClick, winner }) => {
  return (
    <button
      onClick={() => handleClick(index)}
      className="
        w-24 
        h-24 
        text-5xl 
        rounded-md 
        shadow-lg 
        bg-slate-950 
        shadow-slate-900 
        hover:shadow-3xl 
        hover:ring-2 
        disabled:ring-0 
        transition 
      "
      disabled={winner || value}
    >
      {printDecision(value)}
    </button>
  );
};

export default Square;
