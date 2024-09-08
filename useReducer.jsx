/*It is an alternative to useState. It takes a reducer function (state, action) => newState as a parameter.
Returns the current state with a dispatch method.*/

import React, {useState, useReducer} from "react";

const initialState = {
    count: 0
}

function reducerFn(prevState, action){
  switch(action.type){
    case 'increment':
      return {count: prevState.count + action.payload};
    case 'decrement':
      return {count: prevState.count - 1}; 
    default: 
      return prevState;  
  }
}

function App() {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  return (
    <div className="App">
     <button onClick={()=> dispatch({type: "increment", payload: 5})}>Increase</button>
     <button onClick={()=> dispatch({type: "decrement", payload: 5})}>Decrease</button>
     {state.count}
    </div>
  );
}

export default App;