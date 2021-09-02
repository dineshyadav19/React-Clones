import React from 'react'
import '../styles/SignupScreen.css'

function SignupScreen() {
    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input type='email' placeholder='Email or Phone no.'/>
                <input type='password' placeholder='Password'/>
                <button type='submit'>Sign In</button>
                <h4>
                    <span className='signupScreen__gray'>New to Netflix? </span>
                    <span className='signupScreen__link'>Sign up Now.</span>
                </h4>
            </form> 
        </div>
    )
}

export default SignupScreen
 
