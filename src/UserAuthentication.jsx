import React from 'react'
import './UserAuthentication.css'

export default function UserAuthentication(){
    return(
        <section className='vh-100 flex flex-center login-section'>
            <div className='card-container primary-font mp-top-0'>
                <Login/>
            </div>
        </section>
    )
}

function Login(){
    return(
        <div>
            <img src = "./arrow-back.svg" className='arrow-back'/>
            <div className='form-container'>
                <img src = "./logoipsum.svg"/>
                <h2 className='mp-0 welcome-header'>Welcome Back!</h2>
                <p className='mp-0 login-reminder'>Log in to your account</p>
                <form>  
                    <input 
                        type='email' 
                        id='email' 
                        name='email' 
                        placeholder="Enter your email address"
                        className='input-form'
                    />

                    <br/>

                    <input 
                        type='password' 
                        id='password' 
                        name='email' 
                        placeholder='Password'
                        className='input-form'
                    />
                    <div className='flex login-options font-14'>
                        <div className='flex'>
                            <input type='checkbox' id='rememberMe' name='rememberMe' className='mp-0 remember-me-checkbox'/>
                            <p className='remember-me-text'>Remember me</p>
                        </div>
                        <a href=''>Forgot Password?</a>
                    </div>
                    <button type='submit' className='submit-button'>LOG IN</button>
                </form>
                <p className='font-14'>Or, Use social media to Log in</p>
                <div className='login-links-container'>
                    <img src='./facebook-icon.svg' className='link-button'/>
                    <img src='./gmail-icon.svg' className='link-button'/>
                </div>
                <p className='font-14'>don't have an account yet?<a href=''>Sign Up</a></p>
            </div>
        </div>
    )
}