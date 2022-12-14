import React, { useReducer, useState } from 'react';

const reducer = (prevState, action) => {
  const { type, value } = action;

  if (type === 'SET_NAME') {
    return { ...prevState, myname: value };
  } else if (type === 'SET_AGE') {
    return { ...prevState, age: value };
  }

  return prevState;
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { myname: '', age: '' });
  const { myname, age } = state;

  const onChange = (e) => {
    const { name: type, value } = e.target;
    dispatch({ type, value });
  };

  //   const [person, setPerson] = useState({ myname: '', age: '' });
  //   const [name, setName] = useState('');
  //   const [age, setAge] = useState('');
  //   const { myname, age } = person;

  //   const onChange = (e) => {
  //     const { name, value } = e.target;

  //     setPerson((prevState) => ({ ...prevState, [name]: value }));
  //   };

  return (
    <div>
      myname : {myname}, age:{age}
      <hr />
      {JSON.stringify(state)}
      <br />
      <input
        type="text"
        name="SET_NAME"
        placeholder="name"
        onChange={onChange}
      />
      <input type="text" name="SET_AGE" placeholder="age" onChange={onChange} />
    </div>
  );
};

export default App;
