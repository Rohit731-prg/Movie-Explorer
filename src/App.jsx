import React, { useState } from 'react'
import './App.css'
import Main from './Components/Main/Main'

function App() {
  const [details, setDetails] = useState(false);
  return (
    <div className='app-container'>
      <Main details={details} setDetails={setDetails}/>
    </div>
  )
}

export default App