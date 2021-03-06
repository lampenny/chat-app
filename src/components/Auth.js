import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

// import signinImage from '../assets/signup.jpeg';

const cookies = new Cookies();

const initialState = {
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
}

const Auth = () => {
    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(true);

    const handleChange = (e) => {
        setForm({ ... form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { username, password, email } = form;

        const URL = 'https://chat-app-pl.herokuapp.com/auth';

        const { data: { token, userId, hashedPassword, fullName } } = await axios.post(`${URL}/${isSignup ? 'signup' : 'login'}`, {
            username, password, fullName: form.fullName, email
        });

        cookies.set('token', token);
        cookies.set('username', username);
        cookies.set('fullName', fullName);
        cookies.set('userId', userId);

        if(isSignup) {
            cookies.set('email', email);
            cookies.set('hashedPassword', hashedPassword);
        }

        window.location.reload();
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    }

    return (
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                <p className="create-channel__header">MSSGME</p>
                <p>{isSignup ? 'Sign up now and chat with your friends' : 'Sign in to get chatting with your friends'}</p>
                    {/* <p>{isSignup ? 'Sign Up' : 'Sign In'}</p> */}
                    <form onSubmit={handleSubmit}>
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="fullName">Full Name</label>
                                <input 
                                    name="fullName"
                                    type="text"
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="username">Username</label>
                                <input 
                                    name="username"
                                    type="text"
                                    placeholder="Username"
                                    onChange={handleChange}
                                    required
                                  />
                            </div>
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="email">Email</label>
                                <input 
                                    name="email"
                                    type="text"
                                    placeholder="Email"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                                <label htmlFor="password">Password</label>
                                <input 
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    required
                                  />
                            </div>
                        {isSignup && (    
                        <div className="auth__form-container_fields-content_input">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input 
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                    required
                                  />
                            </div>
                        )}
                        <div className="auth_form-container_fields-content_button">
                            <button>{isSignup ? "Sign Up" : "Sign In"}</button>
                        </div>
                    </form>
                    <div className="auth__form-container_fields-account">
                        <p>
                            {isSignup
                            ? "Already have an account?"
                            : "Don't have an account?"
                            }
                            <span onClick={switchMode}>
                             {isSignup ? ' Sign In' : ' Sign Up'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        {/* <div className="auth_form-container_image">
            <img src={signinImage} alt="sign in"/>
        </div> */}
        </div>
    )
}

export default Auth;