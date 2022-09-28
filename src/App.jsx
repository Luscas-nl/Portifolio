import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
    </div>
  )
}

export default App
