import React, { useState } from 'react'
import '../styles/LoginScreen.css'
import SignupScreen from './SignupScreen';


function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img 
                className="loginScreen__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
                alt="Netflix logo"
                />
                <button onClick={() => setSignIn(true)}
                className='loginScreen__button'>Sign In</button>
                <div className='loginScreen__gradient'/>
            </div>

            <div className='loginScreen__body'>
                {signIn ? <SignupScreen /> : (
                <>
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel at anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                    <div className='loginScreen__input'>
                        <form>
                            <input type='email' placeholder='Enter your email'/>
                            <button onClick={() => setSignIn(true)} className='loginScreen__getStarted'>Get Started</button>
                        </form>
                    </div>
                </>
                )}
            </div>
        </div>
    )
}

export default LoginScreen
 
