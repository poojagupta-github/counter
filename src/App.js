import React, { useState } from 'react';
import './style.css'

const App = () => {

  let [score, setScore] = useState(0);

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: 100, fontSize: 60 }}> Counter</h1>
      <h2 style={{ textAlign: 'center', marginTop: 50, fontSize: 90 }}> {score}</h2>
      <div style={{ textAlign: 'center' }}>
        <button onClick={() => (score < 25) ? setScore(score + 1) : ""}>Increment</button>
        <button onClick={() => { setScore(0) }}>Reset</button>
        <button onClick={() => (score > 0) ? setScore(score - 1) : ""}>Decrement</button>
      </div>

    </div>
  )
}

export default App

