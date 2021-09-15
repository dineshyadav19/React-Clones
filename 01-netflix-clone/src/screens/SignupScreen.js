import { signInWithEmailAndPassword } from '@firebase/auth';
import React, { useRef } from 'react'
import { auth, createUserWithEmailAndPassword } from "../firebase";
import '../styles/SignupScreen.css'

function SignupScreen() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    
    const register = (e) => {
        e.preventDefault()

        createUserWithEmailAndPassword(
            auth, emailRef.current.value, passwordRef.current.value
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

        signInWithEmailAndPassword(
            auth, 
            emailRef.current.value, 
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log(authUser)
        })
        .catch((error) => {
            console.log(error.message, error.code)
        })
    }


    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input type='email' ref={emailRef} placeholder='Email or Phone no.'/>
                <input type='password' ref={passwordRef} placeholder='Password'/>
                <button type='submit' onClick={signIn}>Sign In</button>
                <h4>
                    <span className='signupScreen__gray'>New to Netflix? </span>
                    <span className='signupScreen__link' type='submit' onClick={register}>Sign up Now.</span>
                </h4>
            </form> 
        </div>
    )
}

export default SignupScreen
 
