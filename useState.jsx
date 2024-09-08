/*
State can be called the memory of the application. Any information that is wanted to be kept dynamically can be kept as state. 
For example, you can hold a number information, you can store the value of an input or you can store data information that can come from an API. 
It all depends on how you want it.

The useState() hook is the hook that allows to create and manage the state inside the functional component. 
It consists of two pieces. The first piece is the state value you want to keep, the second piece is a function to change this state value. 
Let's see, let's try to keep a state value in our app.
*/

// First include useState from React.
import React, {useState} from "react"; 

const App = () => {
  
  /* Create a state fragment in functional component. It can carry any information you want. I want to keep a text value as state. 
  For this `[state, setState] = useState();` structure is used. The first value in the array is the `state` value, the second value is a `function` used to change the state. 
  The `useState()` part means create state and takes the initial value of state as a parameter. If the parenthesis is left empty, it means that the state value is initially empty. 
  If you say `useState("beginning")` the initial value of the "text" state will be "beginning". You can give values such as `null`, `[]`, `{}` or `" "` in parenthes. */
  const [text, setText] = useState();

  return (
    <div>
      {/* What can we do if we want to give the information from an input to the "text" state and update the "text" state? Let's create an input field. 
      This input has the "onChange" event. The `onChange` event takes the synthetic React event as a parameter (`event`). 
      When the user gives an input to the input, `event.target.value` will hold that input. The `const text = event.target.value` code assigns input information to text. 
      Now we can update the state using the `setText` function. Then we can print the `text` state information to the screen. */}
      <input type="text" onChange={event=> {
        const text = event.target.value;
        setText(text);
      }}></input>
      Username:{text}
    </div>
  )

};

export default App;