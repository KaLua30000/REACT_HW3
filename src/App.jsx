import { useState } from 'react'
import './App.css'
import Home from "../pages/home"
import "../public/css/style.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Home />
  )
}

export default App
