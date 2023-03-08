import './App.css';
import React from 'react'
import Child from './components/child';
import Sibling from './components/sibling';
import { useState, createContext } from 'react';
export const MyContext = createContext()

function App() {

  const [user, setUser] = useState([])

  return (
    <div className="App">
      <Sibling user={user} setUser={setUser} />
      <MyContext.Provider value={user}>
        <h1>Hello</h1>
        <Child />
      </MyContext.Provider>
    </div>
  );
}

export default App;
