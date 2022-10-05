import React, { createContext, useContext } from 'react';

const MessageContext = createContext();

const App = () => (
  <MessageContext.Provider value="Provider Values">
    <Level2Wrapper />
  </MessageContext.Provider>
);

const Level2Wrapper = () => {
  const message = useContext(MessageContext);
  return <Level2 message={message}></Level2>;
};

const Level2 = ({ message }) => <div>Level2 : {message}</div>;

export default App;
