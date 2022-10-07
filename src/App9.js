import React, { createContext, useContext, useReducer, useState } from 'react';

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';

const CounterContext = createContext();

const App = () => {
  //   const [value, setValue] = useState(0);
  // 깃허브 test

  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      Value : {state.value}
      <button onClick={() => dispatch(actionIncrement())}>INCREMENT</button>
      <button onClick={() => dispatch(actionDecrement())}>DECREMENT</button>
      <CounterContext.Provider value={{ state, dispatch }}>
        <GameBox />
      </CounterContext.Provider>
    </div>
  );
};

const reducer = (prevState, action) => {
  //   console.log(action);
  const { type, payload = 1 } = action;
  if (type === INCREMENT) {
    return { value: prevState.value + payload };
  } else if (type === DECREMENT) {
    return { value: prevState.value - payload };
  } else {
    return prevState;
  }
};

const actionIncrement = (payload) => ({ type: INCREMENT, payload });
const actionDecrement = (payload) => ({ type: DECREMENT, payload });

const GameBox = () => {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div>
      <button
        onClick={() => {
          dispatch(actionIncrement(3));
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(actionDecrement(2));
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default App;
