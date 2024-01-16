import Square from './Square';

const Coat = (props) => {
  const { value, ...rest } = props;

  return (
    <div className="">
      <h3 className="text-center text-2xl font-semibold text-slate-300 pb-3">Game</h3>
      <div className="grid grid-cols-3 p-4 gap-4 bg-slate-800 rounded-md shadow-inner ring-2 ring-slate-600">
        {value.map((sqVal, index) => (
          <Square key={index} value={sqVal} index={index} {...rest} />
        ))}
      </div>
    </div>
  );
};

export default Coat;
