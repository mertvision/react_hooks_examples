/*useRef() allows us to access DOM elements and act on their current state with "current".
When the value of a variable defined with useRef changes, the component does not re-render. 
But in useState(), the component is constantly re-rendered. useRef() prevents unnecessary re-rendering.*/

import React, {useEffect, useRef, useCallback} from "react";

const App = () => {
  
  /* A DOM element is referenced with useRef(). */
  const nameRef = useRef();
  const passwordRef = useRef();

  useEffect(()=> {
    /* The current state of the DOM element is to focus on the component when it is first loaded. */
    nameRef.current.focus();
  }, [])

  const handleChange = useCallback(()=> {
  
    const name = nameRef.current.value;
    const password = passwordRef.current.value;

    console.log(name, password)
  },[])

  return (
    <div>
        <form onChange={handleChange}>
           <input type="text" ref={nameRef}></input>
           <input type="password" ref={passwordRef}></input>
        </form>
    </div>
  )
};

export default App;