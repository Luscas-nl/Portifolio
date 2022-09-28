import { useState } from 'react'
import './NavBar.css'
import profile from "../../assets/images/profilePhoto.png"
import NavButton from './navbutton/NavButton'

function NavBar(props) {

    function navHidden(){
        const nav = document.querySelector(".nav")
        const button = document.querySelector(".buttonBox")
        button.classList.toggle("abs")
        nav.classList.toggle("hidden")
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
                <NavButton icon="home" text="Home" />
                <NavButton icon="user" text="About" />
                <NavButton icon="envelope" text="Contacts" />
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