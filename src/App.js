import logo from './logo.svg';
import './App.css';
import { PureClassComponent } from './component/PureClassComponent';
import UseStatePrimitive from './component/UseStatePrimitive';
import UseStateObject from './component/UseStateObject';
import { useState } from 'react';
import react from 'react';
import UseStateArray from './component/UseStateArray';

function App() {
  const [isAdmin, setisAdmin] = useState(false)
  return (
    <div className="App">
      {/* <PureClassComponent/> */}
      <button onClick={() => {setisAdmin(!setisAdmin)}}>update admin</button>
      <UseStatePrimitive/>
      <hr/>
      <UseStateObject />
      <hr/>
      <hr/>
      <UseStateArray/>
    </div>
  );
}

export default App;
