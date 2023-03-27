import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Components/Button/Button'
import Home from './Pages/Home/Home'
import {BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  function Count() {
    setCount( count + 1);
    
  }

  const styles: React.CSSProperties = {
    color: 'white',
    borderRadius: '5px',
    borderWidth: 0,
    width: 'auto',
    height: 'auto',
    padding: '10px',
    backgroundColor: 'blue',
  }

  return (
    <>
      <Router>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
