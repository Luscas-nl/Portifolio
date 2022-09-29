import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar/NavBar'
import photoUser from "./assets/images/homePhoto.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />

      <div className="home">
        <div className="imgIBox">
          <img src={photoUser} alt="" className='imgI'/>
        </div>
        
        <p className='homeText'>Olá, me chamo Eduardo Lucas</p>
        <p className='homeTitle'>Web Designer</p>
        <p className='homeDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Beatae minus blanditiis eveniet!</p>

        <div className="iconLinks">
          <a href=""><i className='fa fa-github'></i></a>
          <p>|</p>
          <a href="https://www.instagram.com/luscas.nl" target="_blank"><i className='fa fa-instagram'></i></a>
          <p>|</p>
          <a href=""><i className='fa fa-linkedin'></i></a>
        </div>
      </div>
    </div>
  )
}

export default App
