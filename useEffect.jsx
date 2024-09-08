/*The useEffect() hook allows us to emulate the lifecycle of class-based components in functional components. 
The lifecycles of a component are:

1. `componentDidMount()`: It is the installation of the component.
2. `componentDidUpdate()`: It is the update of the component.
3. `componentWillUnmount()`: It is the removal of the component.

The useEffect() hook first takes a function, then an array called `dependency array`. The component is updated every time the dependent element in the Array changes.

`useEffect(()=> {}, [])`

For example, you will send a request to an api and the api will return you a data `[]`. Let's assume that there are 3 user objects `[{}, {}, {}]` in the data. 
With useEffect, we can print the api information that comes when the component is loaded for the first time. 
If we then give a dependent variable, the component will be re-rendered every time that variable is updated.
*/

import React, {useState, useEffect} from "react";
import axios from "axios";

const App = () => {

  const [users, setUsers] = useState([]);
  
  useEffect(()=> {
      const getUsers = async () => {
        const res = await axios.get("API ENDPOINT");
        setUsers(res.data)
      }     
      getUsers();
  }, [])

  return (
    <div>
      {users.map(user=> {
        return (
          <div>
            <h1>{user.name}</h1>
          </div>
        )
      })}
    </div>
  )
};

export default App;