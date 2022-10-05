import { useState } from 'react'
import './NavBar.css'
import profile from "../../assets/images/profilePhoto.png"
import NavButton from './navbutton/NavButton'

function NavBar(props) {

    function navHidden(){
        const nav = document.querySelector(".nav")
        const button = document.querySelector(".buttonBox")
        const app = document.querySelector(".App")
        const menu = document.querySelector(".menuButton")

        document.documentElement.style.setProperty('--transition-time-app', ".6s")
        button.classList.toggle("abs")
        nav.classList.toggle("hidden")
        app.classList.toggle("hidden")
        menu.classList.toggle("hidden")
    }

    return(
        <div className='nav'>
            <div className="nameBox">
                <h1><span className='colorE' >P</span>ortifólio</h1>

                <div className="buttonBox" onClick={navHidden}>
                    <i class="fa fa-chevron-circle-left"></i>
                </div>
            </div>

            <div className="buttonsNav">
                <div className="buttonsNavBox">
                    <NavButton icon="home" text="Home" refe="home"/>
                    <NavButton icon="user" text="Sobre" refe="about" />
                    <NavButton icon="envelope" text="Contatos" refe="contacts" />
                </div>
            </div>

            <div className="emailNav">
                <img src={profile} alt='Profile Photo' className="photoEmail" />

                <div className='emailDes'>
                    <p className="emailName">Eduardo Lucas</p>
                    <a href='mailto:eduardol123azq@gmail.com' className="email">eduardol123azq@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

export default NavBar