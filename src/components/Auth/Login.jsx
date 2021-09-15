import React, { useState } from 'react';
import './login.css';
import { auth, provider } from './Firebase';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';
import SignUp from './SignUp';
const Login = () => {
    const [dispatch, user] = useStateValue();
    const [show, setShow] = useState(false)
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message));
    }
    return (
        <>
            {
                !show ? (
                    <div className="main__div">
                        <div className="sidebar__main">
                            <h1> Dash.</h1>
                        </div>
                        <div className="login__main">
                            <div className="login__details">
                                <span className="login__heading" >Sign In</span>
                                <span className="login__heading1">Sign in to your account</span>
                                <div className="login__companies">
                                    <span className="login__companiesbtn" onClick={signIn}>Sign in with Google </span>
                                    <span className="login__companiesbtn">Sign in with Apple </span>
                                </div>
                                <div className="login__form">
                                    <p>
                                        <span className="login__label"> Email </span>
                                        <input type="text" />
                                    </p>
                                    <p>
                                        <span className="login__label" > Password</span>
                                        <input type="password" />
                                    </p>
                                    <span style={{ color: '#346BD4' }}>Forgot Password? </span>
                                    <p>
                                        <input type="submit" value="Sign in" />
                                    </p>
                                </div>
                                <p>Dont have a account? <span style={{ color: '#346BD4', cursor: 'pointer' }} onClick={() => setShow(!show)}> Register here </span></p>
                            </div>
                        </div>
                    </div>) : (
                    <SignUp setShow={setShow} show={show} user={user} />
                )
            }
        </>
    )
}

export default Login
