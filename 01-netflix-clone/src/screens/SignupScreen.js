import React, { useRef } from 'react'
import { auth, createUserWithEmailAndPassword } from "../firebase";
import '../styles/SignupScreen.css'

function SignupScreen() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    
    const register = (e) => {
        e.preventDefault()

        createUserWithEmailAndPassword(
            auth, emailRef.current, passwordRef.current
        )
        .then((authUser) => {
            console.log(authUser)
        })
        .catch((error) => {
            console.log(error.message, error.code)
        })
    }

    const signIn = (e) => {
        e.preventDefault()
    }


    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input type='email' placeholder='Email or Phone no.'/>
                <input type='password' placeholder='Password'/>
                <button type='submit' onClick={signIn}>Sign In</button>
                <h4>
                    <span className='signupScreen__gray'>New to Netflix? </span>
                    <span className='signupScreen__link' onClick={register}>Sign up Now.</span>
                </h4>
            </form> 
        </div>
    )
}

export default SignupScreen
 
