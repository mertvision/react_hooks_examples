/* A context is created with createContext(). This context returns a Provider and a Consumer (destructuring).
Provider is scope: <CountContext.Provider value={}><CountContext.Provider> 
The value "value={}" is the value to be transferred. A function can also be moved inside. Multiple values ​​are nested {{}}.
UseContext can be used instead of Consumer.
*/

import { useState, createContext, useContext } from "react";

const CountContext = createContext();
const UserContext = createContext();

const user = {
  name: "Mert",
  auth: "true"
}

const App = () => {
  const [count, setCount] = useState(1);

  return (
    <UserContext.Provider value={user}>
      <CountContext.Provider value={{ count, setCount }}>
        <CounterList />
      </CountContext.Provider>
    </UserContext.Provider>
  )
};

const CounterList = () => {
  return <Counter />;
}

const Counter = () => {
 
  const value = useContext(CountContext);
  const user = useContext(UserContext);

  return (
  <>
    {value.count}
    <button onClick={()=> value.setCount((c) => c+1)}>Click</button>
    {user.name}, 
    {user.auth}
  </>
  )
}

export default App;