import React, { useEffect, useState } from 'react'
import "./NavBar.css"

function NavBar() {

    const [show, handleShow] = useState(false)

    const transitionNavbar = () => {
        if(window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }
    
    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar)
        return () => window.removeEventListener("scroll", transitionNavbar)
    },[])


    return (
        <div className={`navbar ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img 
                className = "nav__logo"
                src = "http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt = "Netflix logo" 
                />
                <img 
                className = "nav__avatar"
                src = "https://i.redd.it/dh5otp8kcf741.png"
                alt = "avatar pic" 
                />
            </div>
        </div>
    )
}

export default NavBar
