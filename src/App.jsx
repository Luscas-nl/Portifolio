import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar/NavBar'
import photoUser from "./assets/images/homePhoto.jpg"

function App() {
  const [count, setCount] = useState(0)


  function openMenu(){
    const nav = document.querySelector(".nav")
    const button = document.querySelector(".buttonBox")
    const app = document.querySelector(".App")
    const menu = document.querySelector(".menuButton")

    document.documentElement.style.setProperty('--transition-time-app', ".8s")
    button.classList.toggle("abs")
    nav.classList.toggle("hidden")
    app.classList.toggle("hidden")
    menu.classList.toggle("hidden")
  }

  return (
    <div className="App">
      <NavBar />
      <button className='menuButton' onClick={openMenu}>
        <i className='fa fa-bars' />
      </button>

      {/*--------------------- HOME ---------------------*/}
      <div className="home" id='home'>
        <div className="imgIBox">
          <img src={photoUser} alt="" className='imgI'/>
        </div>
        
        <h5 className='homeText'>Olá! Sou Eduardo Lucas</h5>
        <p className='homeTitle'>Web Developer</p>
        <p className='homeDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Beatae minus blanditiis eveniet!</p>

        <div className="iconLinks">
          <a href=""><i className='fa fa-github'></i></a>
          <p>|</p>
          <a href="https://www.instagram.com/luscas.nl" target="_blank"><i className='fa fa-instagram'></i></a>
          <p>|</p>
          <a href=""><i className='fa fa-linkedin'></i></a>
        </div>
      </div>
      {/*--------------------- # END HOME ---------------------*/}


      {/*--------------------- ABOUT ---------------------*/}
      <div className="about" id='about'>
        <h3>Sobre Mim</h3>
      </div>
      {/*--------------------- # END ABOUT ---------------------*/}

    </div>
  )
}

export default App
