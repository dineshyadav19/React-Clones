import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import "./styles/NavBar.css"

function NavBar() {

    const [show, handleShow] = useState(false);
    const history = useHistory()

    const transitionNav = () => {
        if(window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNav)
        return () => window.removeEventListener("scroll", transitionNav)
    },[])

    return (
        <div className={`navbar ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img 
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
                alt="Netflix logo"
                />
                <img 
                onClick={() => history.push('/profile')}
                className="nav__avatar"
                src="https://i.redd.it/dh5otp8kcf741.png"
                alt="Netflix User"
                />
            </div>
        </div>
    )
}

export default NavBar
