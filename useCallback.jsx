/*useCallback() returns the memoized result. Memoization is an optimization technique.
Memoization caches the results in functions that perform expensive operations, and if the same input is given again, 
it provides performance by calling the result from the cache without repeating the same expensive operation.
Storing these results also has a cost. Expensive function here means functions that do intensive computations and work recursive.

useCallback() takes a function and a dependency array as parameters.
As long as the values ​​in the Dependency array do not change, it returns the function it received.
The function is recreated if the dependent variables change.

const memoizedFunc = useCallback(() => {
  someFunc(a,b)
},[a,b])

Its intended use in React.js is to prevent unnecessary rendering.
In React, every time the components are rendered, the functions in the component are also recreated.
If there is no change, useCallback is used to call the memorized result.*/

import React, {useState, memo, useCallback} from "react";

const App = () => {

  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);

  const increment = useCallback(()=> {
    setCount(c => c+value);
  }, [value])

  return (
    <div>
    {count}
    <CountorButtons increment={increment}></CountorButtons>
    <input type="number" onChange={(e)=> {setValue(+e.target.value)}} />
    </div>
  )
};

const CountorButtons = memo(({increment})=> {
  console.log('render')
  return (
    <>
    <button onClick={increment}>Increment</button></>
  )
;
})

export default App;