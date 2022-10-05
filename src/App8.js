import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

const App = () => {
  const [value, setValue] = useState(0);
  const onIncreament = () => setValue((prevState) => prevState + 1);

  return (
    <div>
      {value}
      <button onClick={onIncreament}> +1 </button>
      <hr />
      <CounterContext.Provider value={{ value, onIncreament }}>
        <Level3 />
      </CounterContext.Provider>
    </div>
  );
};

const Level3 = () => {
  const { value, onIncreament } = useContext(CounterContext);

  return (
    <div>
      Level3 : {value}
      <button onClick={onIncreament}>+1</button>
    </div>
  );
};

export default App;
